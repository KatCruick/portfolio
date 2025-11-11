const config = {
  singleQuote: true,
  trailingComma: 'all',
  printWidth: 80,
  tailwindFunctions: ['clsx'],
  // https://github.com/trivago/prettier-plugin-sort-imports/tree/main?tab=readme-ov-file#apis
  importOrder: [
    '<THIRD_PARTY_MODULES>',
    '^astro/(.*)$',
    '^[./]',
    '^@(assets|images|public)/(.*)$',
  ],
  // Force a newline between import groups
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  // Do not auto-sort side-effect imports, i.e. `import 'side-effect-lib'`
  importOrderSideEffects: false,
  plugins: [
    'prettier-plugin-astro',
    '@trivago/prettier-plugin-sort-imports',
    'prettier-plugin-tailwindcss',
  ],
};

export default config;
