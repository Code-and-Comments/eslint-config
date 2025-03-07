# @code-and-comments/eslint-config
Default eslint configuration for projects of Code &amp; Comments.  
It is based on [angular-eslint](https://github.com/angular-eslint/angular-eslint) and [ngrx-eslint](https://www.npmjs.com/package/@ngrx/eslint-plugin) with some code and comments biased config.

## Setup in a project
1. Install dependencies
```shell
ng add @angular-eslint/schematics
npm i -D @code-and-comments/eslint-config
```

2. Setup eslint in project

Update `eslint.config.js` file with the following content:
```js
const cnc = require("@code-and-comments/eslint-config");

module.exports = [
  ...cnc.default
];

```

## Update eslint-config
To update the config update the `index.js` file, push and tag a new version. 
The `package.json` version will be automatically updated to the git tag via the CI pipeline.