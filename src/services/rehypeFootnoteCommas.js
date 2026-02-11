function isFootnoteRefSup(node) {
  return (
    node.type === 'element' &&
    node.tagName === 'sup' &&
    node.children?.some(
      (child) =>
        child.type === 'element' &&
        child.tagName === 'a' &&
        child.properties?.dataFootnoteRef !== undefined,
    )
  );
}

function walk(node) {
  if (!node.children) return;

  for (let i = node.children.length - 1; i > 0; i--) {
    if (
      isFootnoteRefSup(node.children[i]) &&
      isFootnoteRefSup(node.children[i - 1])
    ) {
      node.children[i - 1].children.push({ type: 'text', value: ',' });
    }
  }

  node.children.forEach(walk);
}

export function rehypeFootnoteCommas() {
  return (tree) => walk(tree);
}
