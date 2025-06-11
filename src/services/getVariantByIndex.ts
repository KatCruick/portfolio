export const getVariantByIndex = <T>(
  options: T[] | readonly T[],
  index: number,
): T => {
  const adjustedIndex = index % options.length;

  if (adjustedIndex < 0 || adjustedIndex >= options.length) {
    throw new Error('Index out of bounds');
  }

  return options[adjustedIndex];
};
