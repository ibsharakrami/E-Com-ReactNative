module.exports = {
  root: true,
  extends: '@react-native',
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
  },
  rules: {
    quotes: ['error', 'single'],
  },
  'prettier/prettier': ['error', {endOfLine: 'auto'}],
};
