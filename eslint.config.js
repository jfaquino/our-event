import eslintPluginAstro from "eslint-plugin-astro";
import eslint from "@eslint/js";
import tseslint from "typescript-eslint";

export default [
   ...tseslint.config(
      eslint.configs.recommended,
      ...tseslint.configs.recommended
   ),
   ...eslintPluginAstro.configs["flat/recommended"],
   {
      rules: {
         // override/add rules settings here, such as:
         // "astro/no-set-html-directive": "error"
      },
   },
];
