module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es6: true
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    sourceType: 'module'
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/recommended',
    '@vue/standard'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  }
}
