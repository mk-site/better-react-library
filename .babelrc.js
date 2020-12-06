/* eslint-disable */
module.exports = {
    // "ignore": [
    //     "node_modules/**"
    // ],
    "presets": [
        [
            "@babel/preset-env",
            {
                "corejs": 3,
                "useBuiltIns": "usage"
            }
        ],
        ["@babel/preset-react"]
    ],
    "plugins": [
        ["@babel/plugin-transform-runtime", {
            "corejs": 3
        }],
        ["@babel/plugin-proposal-decorators", {
            "legacy": true
        }],
        "@babel/plugin-syntax-jsx",
        "@babel/plugin-proposal-class-properties",
        "@babel/plugin-transform-react-jsx"
    ]
}