module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 11,
        sourceType: "module",
        ecmaFeatures: {
            "jsx": true,
            "experimentalObjectRestSpread": true,
            legacyDecorators: true // 加这个才支持装饰器的
        }
    },
    "settings": {
        "import/resolver": {
          "node": {
            "extensions": [".ts", ".tsx", ".js", ".jsx"]
          }
        }
    },
    env: {
        node: true,
        es6: true,
        browser: true
    },
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
    ],
    plugins: [
        "react",
        "react-hooks",
        "typescript",
        "@typescript-eslint"
    ],
    rules: {
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn",
        'indent': ['error', 4],
        'quotes': ['error', 'single'],
        'semi': 'off',
        "no-undef": 0,
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": ["error", { "varsIgnorePattern": "^_" }],
        "@typescript-eslint/no-explicit-any": "error",
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "react/jsx-filename-extension": ["error", { "extensions": [".tsx", ".jsx"] }],
        "import/extensions": ["off"]
    }
}
