module.exports = {
  "env": {
    "node": true,
    "browser": true,
    "commonjs": true,
    "es6": true
  },
  "extends": "eslint:recommended",
  "globals": {
    "process": true,
    "__dirname": true
  },
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true
    },
    "sourceType": "module",
    "ecmaVersion": 7
  },
  "rules": {
    "quotes": [0, "single"],
    "no-console": 1,
    "no-debugger": 2,
    "no-var": 0,
    "semi": 0,
    "no-extra-semi": 2,
    "no-irregular-whitespace": 0,
    "no-trailing-spaces": 1,
    "eol-last": 0,
    "no-unused-vars": [2, { "vars": "all", "args": "after-used" }],
    "no-underscore-dangle": 0,
    "no-alert": 2,
    "no-lone-blocks": 0,
    "no-class-assign": 2,
    "no-cond-assign": 2,
    "no-const-assign": 2,
    "no-delete-var": 2,
    "no-dupe-keys": 2,
    "no-duplicate-case": 2,
    "no-dupe-args": 2,
    "no-empty": 2,
    "no-func-assign": 2,
    "no-invalid-this": 0,
    "no-redeclare": 2,
    "no-spaced-func": 2,
    "no-this-before-super": 0,
    "no-undef": 2,
    "no-use-before-define": 2,
    "camelcase": 0,
    "no-unreachable": 1,
    "comma-dangle": 2,
    "no-mixed-spaces-and-tabs": 1,
    "prefer-arrow-callback": 0,
    "arrow-parens": 0,
    "arrow-spacing": 0
  },
  "settings": {
    "import/ignore": [
      "node_modules"
    ]
  }
}
