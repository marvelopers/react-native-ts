module.exports = {
  root: true,
  plugins: ["prettier", "react", "react-hooks"],
  extends: ['@react-native-community', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ["./tsconfig.json"]
  },
  rules: {
    'prettier/prettier': ['error'],
    'import/prefer-default-export': 'off',
    'import/no-unresolved': 'off',
    'import/extensions': [1, {
      svg: 'always',
      ts: 'never',
      tsx: 'never',
      json: 'ignorePackages',
    }],
    '@typescript-eslint/no-use-before-define': 'off',
    'react/require-default-props': 'off',
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn"
  },
  ignorePatterns: ['.eslintrc.js', 'babel.config.js', 'metro.config.js']
};
