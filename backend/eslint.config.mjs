// @ts-check

import eslint from "@eslint/js"
import tseslint from "typescript-eslint"
import globals from "globals"
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended"

export default tseslint.config(
   eslint.configs.recommended,
   eslintPluginPrettierRecommended,
   ...tseslint.configs.strict,
   ...tseslint.configs.stylistic,
   {
      languageOptions: {
         globals: { ...globals.node },
      },
   },
   {
      rules: {
         "@typescript-eslint/no-explicit-any": "off",
         "@typescript-eslint/no-unused-vars": "warn",
      },
      ignores: ["node_modules"],

      //   extends: [eslintPluginPrettierRecommended], or you could put it here
   },
)
