import neostandard from "neostandard";
import tseslint from "typescript-eslint";
import importPlugin from "eslint-plugin-import";
import promisePlugin from "eslint-plugin-promise";
import reactPlugin from "eslint-plugin-react";
import storybookPlugin from "eslint-plugin-storybook";

export default [
  importPlugin.flatConfigs.recommended,
  promisePlugin.configs["flat/recommended"],
  ...neostandard(),
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {jsx: true},
      },
      globals: {JSX: "readonly"}
    },
    plugins: {
      react: reactPlugin,
      "@typescript-eslint": tseslint.plugin,
      storybook: storybookPlugin
    },
    rules: {
      "react/react-in-jsx-scope": "off",
    },
    settings: {
      react: {
        version: "detect"
      },
      "import/resolver": {
        typescript: {}
      },
    }
  },
  {
    ignores: ["dist", "node_modules", "build", "public"]
  }
];
