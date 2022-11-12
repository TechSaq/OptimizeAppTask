module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['module-resolver'],
  overrides: [
    {
      files: ['*.js', '*.jsx'],
      rules: {
        'no-shadow': 'off',
        'no-undef': 'off',
        'module-resolver/use-alias': 2,
      },
    },
  ],
};
