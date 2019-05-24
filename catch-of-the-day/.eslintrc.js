module.exports = {
    env: {
        "browser": true,
        "es6": true,
        "node": true
    },
    extends: "airbnb",
    parser: "babel-eslint",
    globals: {
        Atomics: "readonly",
        SharedArrayBuffer: "readonly"
    },
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 2018,
        sourceType: "module"
    },
    plugins: [
        "react"
    ],
    rules: {
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "react/jsx-one-expression-per-line": "off",
        "react/forbid-prop-types": "off",
        "react/destructuring-assignment": "off",
        "lines-between-class-members": "off",
        "react/prefer-stateless-function": "off",
        "react/no-access-state-in-setstate": "off",
        "react/no-this-in-sfc": "off"

    }
}