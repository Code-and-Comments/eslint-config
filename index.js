module.exports = {
    ignorePatterns: [
      "projects/**/*"
    ],
    overrides: [
      {
        files: ["*.ts"],
        extends: [
          "eslint:recommended",
          "plugin:@typescript-eslint/recommended",
          "plugin:@angular-eslint/recommended",
          "plugin:@angular-eslint/template/process-inline-templates",
          "plugin:@ngrx/eslint-plugin/recommended"
        ],
        rules: {
          "object-curly-spacing": ["error", "always"],
          "object-curly-newline": ["error"],
          "operator-linebreak": ["error", "after", { "overrides": { ":": "before", "?": "before" } }],
          "@angular-eslint/component-class-suffix": [
            "error", { "suffixes": [ "Page", "Component", "Modal"] }
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
        }
      },
      {
        files: ["*.html"],
        extends: [
          "plugin:@angular-eslint/template/recommended",
          "plugin:@angular-eslint/template/accessibility"
        ],
        rules: {
          "@angular-eslint/template/eqeqeq": ["error", { "allowNullOrUndefined": true }]
        }
      }
    ]
}
  