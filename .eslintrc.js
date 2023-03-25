module.exports = {
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    // 'plugin:react-hooks/recommended', // causing problems, replaced by 'airbnb'
    'plugin:react/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    // 'standard-with-typescript', // causing problems, replaced by 'airbnb/hooks'
    // Prettier always last
    'plugin:prettier/recommended',
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['react', '@typescript-eslint', 'react-button-has-type', 'prettier'],
  rules: {
    'require-jsdoc': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/ban-types': 'off',
    // ESLint: Missing file extension "tsx" for ".[file]"(import/extensions)
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    // ESLint: Function component is not a function declaration(react/function-component-definition)
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    // ESLint: JSX not allowed in files with extension '.tsx'(react/jsx-filename-extension)
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    // ESLint: Prefer default export on a file with single export.(import/prefer-default-export)
    'import/prefer-default-export': 'off',
    // ESLint: Missing an explicit type attribute for button(react/button-has-type)
    'react/button-has-type': [
      0,
      {
        button: true,
        submit: true,
        reset: true,
      },
    ],
  },
};
