import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt(
  {
    // Custom flat configs here if needed
  },
  {
    rules: {
      "vue/multi-word-component-names": "off",
      "vue/html-self-closing": "off",
    },
  }
);
// your custom flat configs go here, for example:
// {
//   files: ['**/*.ts', '**/*.tsx'],
//   rules: {
//     'no-console': 'off' // allow console.log in TypeScript files
//   }
// },
// {
//   ...
// }
