import typescriptEslint from "@typescript-eslint/eslint-plugin";
import angularEslint from "@angular-eslint/eslint-plugin";
import ngrxEslint from "@ngrx/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import angularTemplateParser from "@angular-eslint/template-parser";

export default [
  {
    files: ["src/**/*.ts"],
    languageOptions: {
      parser: tsParser,
    },
    plugins: {
      "@typescript-eslint": typescriptEslint,
      "@angular-eslint": angularEslint,
      "@ngrx": ngrxEslint,
    },
    rules: {
      ...typescriptEslint.configs.recommended.rules,
      ...angularEslint.configs.recommended.rules,
      ...ngrxEslint.configs.all.rules,
      "object-curly-spacing": ["error", "always"],
      "object-curly-newline": ["error"],
      "operator-linebreak": ["error", "after", { "overrides": { ":": "before", "?": "before" } }],
      "@angular-eslint/component-class-suffix": [
        "error", { "suffixes": ["Page", "Component", "Modal"] }
      ],
      "@angular-eslint/component-selector": [
        "error",
        {
          "prefix": "app, input, cp",
          "style": "kebab-case"
        }
      ],
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          "args": "all",
          "vars": "all",
          "argsIgnorePattern": "^_",
          "varsIgnorePattern": "^_",
        }
      ]
    },
  },
  {
    files: ["src/**/*.html"],
    languageOptions: {
      parser: angularTemplateParser,
    },
    plugins: {
      "@angular-eslint": angularEslint,
    },
    rules: {
      ...angularEslint.configs.recommended.rules,
    },
  },
];
