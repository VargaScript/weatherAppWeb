module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    extends: [],
  parser: '@typescript-eslint/parser',
  plugins: [],
  "root": true,
    "extends": [
        "standard-with-typescript",
        "plugin:react/recommended",
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended'
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        '@typescript-eslint'
    ],
    "rules": {
    }
}
