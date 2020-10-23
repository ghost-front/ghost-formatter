module.exports = {
  root: true,
  parser: "babel-eslint",
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 6
  },
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true
  },
  extends: ['eslint:recommended'],
  rules: {}
}
