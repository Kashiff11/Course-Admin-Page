module.exports = {
    "env": {
      "browser": true,
      "node": true,
      "es6": true,
      "jest": true  
    },
  "extends": [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:import/errors',
    'plugin:import/warnings'
  ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
  },
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
      "no-debugger": "off",
      "no-console": "off",
      "no-unused-vars": "warn",
      "react/prop-types": "warn"
  },
  "settings": {
    "react": {
        "version": "detect"
      }
  },
  "root": true
};