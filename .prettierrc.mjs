/** @type {import("prettier").Config} */
export default {
  trailingComma: 'es5',
  semi: true,
  tabWidth: 2,
  printWidth: 80,
  singleQuote: true,
  plugins: [
    'prettier-plugin-astro',
    'prettier-plugin-tailwindcss', // must be last
  ],
  overrides: [
    {
      files: '*.astro',
      options: { parser: 'astro' },
    },
  ],
};
