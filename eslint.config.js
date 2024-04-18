/* eslint-disable indent */
const react = require('eslint-plugin-react');

module.exports = [
  {
    files: ['**/*.{js,jsx,mjs,cjs,ts,tsx}'],
    plugins: {
      react,
    },
    languageOptions: {
      parserOptions: {
        'ecmaVersion': 2022,
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      // ... any rules you want
      'react/jsx-uses-react': 'error',
      'react/jsx-uses-vars': 'error',
      'react/prop-types': 0,
      'indent': [ 
        'error',
        2
      ],
      'linebreak-style': [
        'error',
        'unix'
      ],
      'quotes': [
        'error',
        'single'
      ],
      'semi': [
        'error',
        'always'
      ],
      'no-unused-vars': 'off',
      'no-unreachable': 'off'
     },
    // ... others are omitted for brevity
  }
];