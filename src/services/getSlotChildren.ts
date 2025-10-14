import { parseHTML } from 'linkedom';

/**
 * https://cassidysmith.dev/posts/modify-astro-slot-children
 */
export const getSlotChildren = (html: string): string[] => {
  const { document } = parseHTML(`<div>${html}</div>`);

  const container = document.querySelector('div');

  if (!container) {
    return [];
  }

  const children = Array.from(container.children).map(
    (element) => element.outerHTML,
  );

  return children;
};
