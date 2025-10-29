import { visit } from 'unist-util-visit';

export function remarkCustomDirectives() {
  return (tree) => {
    const imports = new Set();
    const imageImports = new Map(); // Track image path -> variable name
    let imageCounter = 0;

    // Helper to generate unique image variable name
    function getImageVariableName(imagePath) {
      if (imageImports.has(imagePath)) {
        return imageImports.get(imagePath);
      }

      // Create a safe variable name from the file path
      const baseName = imagePath
        .split('/')
        .pop()
        .replace(/[^a-zA-Z0-9]/g, '_')
        .replace(/^(\d)/, '_$1'); // Ensure it doesn't start with a number

      const varName = `__img_${baseName}_${imageCounter++}__`;
      imageImports.set(imagePath, varName);
      return varName;
    }

    // Helper to check if a value looks like an image path
    function isImagePath(value) {
      if (typeof value !== 'string') return false;
      return /\.(png|jpg|jpeg|gif|svg|webp|avif)$/i.test(value);
    }

    visit(tree, (node) => {
      if (node.type === 'containerDirective') {
        if (node.name === 'full-width') {
          imports.add('SectionTextFullWidth');

          // Transform to MDX JSX element
          node.type = 'mdxJsxFlowElement';
          node.name = 'SectionTextFullWidth';
          node.attributes = [];
        }

        if (node.name === 'text-left') {
          imports.add('SectionTextLeft');

          // Transform to MDX JSX element with props
          node.type = 'mdxJsxFlowElement';
          node.name = 'SectionTextLeft';

          // Convert directive attributes to JSX attributes
          const attrs = node.attributes || {};
          node.attributes = [];

          // Handle each attribute
          Object.keys(attrs).forEach((key) => {
            const value = attrs[key];

            // Check if this is an image path
            if (isImagePath(value)) {
              const varName = getImageVariableName(value);

              // Add JSX attribute with variable reference
              node.attributes.push({
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
            // Handle numbers
            else if (!isNaN(value) && value !== '') {
              node.attributes.push({
                type: 'mdxJsxAttribute',
                name: key,
                value: {
                  type: 'mdxJsxAttributeValueExpression',
                  value: value,
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
            // Handle strings
            else {
              node.attributes.push({
                type: 'mdxJsxAttribute',
                name: key,
                value: value,
              });
            }
          });
        }
      }
    });

    // Collect all import statements
    const allImports = [];

    // Add component imports
    if (imports.size > 0) {
      allImports.push(
        Array.from(imports)
          .map(
            (name) =>
              `import ${name} from '../../components/project/${name}.astro';`,
          )
          .join('\n'),
      );
    }

    // Add image imports
    if (imageImports.size > 0) {
      allImports.push(
        Array.from(imageImports.entries())
          .map(([path, varName]) => `import ${varName} from '${path}';`)
          .join('\n'),
      );
    }

    // Add all imports at the top
    if (allImports.length > 0) {
      const importStatements = [];
      const estreeBody = [];

      // Component imports
      imports.forEach((name) => {
        estreeBody.push({
          type: 'ImportDeclaration',
          specifiers: [
            {
              type: 'ImportDefaultSpecifier',
              local: { type: 'Identifier', name },
            },
          ],
          source: {
            type: 'Literal',
            value: `../../components/project/${name}.astro`,
          },
        });
      });

      // Image imports
      imageImports.forEach((varName, path) => {
        estreeBody.push({
          type: 'ImportDeclaration',
          specifiers: [
            {
              type: 'ImportDefaultSpecifier',
              local: { type: 'Identifier', name: varName },
            },
          ],
          source: {
            type: 'Literal',
            value: path,
          },
        });
      });

      tree.children.unshift({
        type: 'mdxjsEsm',
        value: allImports.join('\n'),
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
