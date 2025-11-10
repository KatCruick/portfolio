// import { type Root } from 'mdast';
import { type ContainerDirective } from 'mdast-util-directive';

import { visit } from 'unist-util-visit';

/**
 * Helper to check if a value looks like an image path
 */
const isImagePath = (value: string | undefined): boolean => {
  if (typeof value !== 'string') {
    return false;
  }

  return /\.(png|jpg|jpeg|gif|svg|webp|avif)$/i.test(value);
};

/**
 * Remark plugin to transform custom directives into MDX JSX components.
 *
 * This plugin transforms container directives (:::directive-name) into MDX JSX elements
 * that can be mapped to Astro components via the `components` prop in MDX.
 *
 * The plugin handles:
 * - Converting directives to MDX JSX elements
 * - Importing image assets for image-type attributes
 * - Passing image imports as JSX expression attributes
 * - Converting numeric string attributes to actual numbers
 */
export function remarkCustomDirectives() {
  return (tree: Root) => {
    const imageImports = new Map<string, string>();
    let imageCounter = 0;

    /**
     * Generate a unique variable name for an image import
     */
    const getImageVariableName = (imagePath: string): string => {
      if (imageImports.has(imagePath)) {
        return imageImports.get(imagePath)!;
      }

      // Create a safe variable name from the file path
      const baseName = imagePath
        .split('/')
        .pop()!
        .replace(/[^a-zA-Z0-9]/g, '_')
        .replace(/^(\d)/, '_$1'); // Ensure it doesn't start with a number

      const varName = `__img_${baseName}_${imageCounter++}__`;
      imageImports.set(imagePath, varName);
      return varName;
    };

    visit(tree, (node) => {
      if (node.type === 'containerDirective') {
        const containerNode = node as ContainerDirective;
        const attributes = containerNode.attributes || {};

        // Transform to MDX JSX element
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const jsxNode = node as any;
        jsxNode.type = 'mdxJsxFlowElement';
        jsxNode.name = containerNode.name;
        jsxNode.attributes = [];

        // Process attributes
        Object.entries(attributes).forEach(([key, value]) => {
          if (typeof value !== 'string') {
            jsxNode.attributes.push({
              type: 'mdxJsxAttribute',
              name: key,
              value: value,
            });
            return;
          }

          // Handle image paths - create an import and add as JSX expression
          if (isImagePath(value)) {
            const varName = getImageVariableName(value);

            // Add JSX expression attribute that references the imported image
            jsxNode.attributes.push({
              type: 'mdxJsxAttribute',
              name: key,
              value: {
                type: 'mdxJsxAttributeValueExpression',
                value: varName,
                data: {
                  estree: {
                    type: 'Program',
                    sourceType: 'module',
                    body: [
                      {
                        type: 'ExpressionStatement',
                        expression: {
                          type: 'Identifier',
                          name: varName,
                        },
                      },
                    ],
                  },
                },
              },
            });
          }
          // Handle numeric values
          else if (!isNaN(Number(value)) && value !== '') {
            jsxNode.attributes.push({
              type: 'mdxJsxAttribute',
              name: key,
              value: {
                type: 'mdxJsxAttributeValueExpression',
                value: String(value),
                data: {
                  estree: {
                    type: 'Program',
                    sourceType: 'module',
                    body: [
                      {
                        type: 'ExpressionStatement',
                        expression: {
                          type: 'Literal',
                          value: parseFloat(value),
                        },
                      },
                    ],
                  },
                },
              },
            });
          }
          // Handle string values
          else {
            jsxNode.attributes.push({
              type: 'mdxJsxAttribute',
              name: key,
              value: value,
            });
          }
        });
      }
    });

    // Add image imports at the top of the file
    if (imageImports.size > 0) {
      const estreeBody = Array.from(imageImports.entries()).map(
        ([path, varName]) => ({
          type: 'ImportDeclaration' as const,
          specifiers: [
            {
              type: 'ImportDefaultSpecifier' as const,
              local: { type: 'Identifier' as const, name: varName },
            },
          ],
          source: {
            type: 'Literal' as const,
            value: path,
          },
        }),
      );

      const importStatements = Array.from(imageImports.entries())
        .map(([path, varName]) => `import ${varName} from '${path}';`)
        .join('\n');

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (tree.children as any[]).unshift({
        type: 'mdxjsEsm',
        value: importStatements,
        data: {
          estree: {
            type: 'Program',
            sourceType: 'module',
            body: estreeBody,
          },
        },
      });
    }
  };
}
