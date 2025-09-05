import { parseHTML } from 'linkedom';

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
