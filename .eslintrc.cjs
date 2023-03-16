/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es6: true,
    commonjs: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 2021,
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  extends: ['prettier', 'plugin:import/recommended', 'plugin:@typescript-eslint/recommended'],
  plugins: ['react', 'prettier', '@typescript-eslint', 'import'],
  rules: {
    'import/default': ['error'],
    'import/named': ['error'],
    'import/newline-after-import': ['error', { count: 1 }],
    'import/no-unresolved': ['error'],
    'import/order': [
      'error',
      {
        groups: [['external', 'builtin'], ['internal', 'parent', 'index'], 'sibling'],
        alphabetize: { order: 'asc', caseInsensitive: true },
      },
    ],
    'no-nested-ternary': 0,
    'no-underscore-dangle': 0,
    'no-unused-vars': 'off',
    'react/no-unknown-property': ['warn'],
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'prettier/prettier': [
      'error',
      {
        printWidth: 100,
        arrowParens: 'avoid',
        semi: false,
        singleQuote: true,
        tabWidth: 2,
        trailingComma: 'all',
        endOfLine: 'auto',
      },
    ],
  },
  settings: {
    'import/resolver': {
      typescript: {
        project: ['./tsconfig*.json'],
      },
    },
  },
}
