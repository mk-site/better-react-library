const path = require('path')

module.exports = {
    setupFilesAfterEnv: [path.resolve(__dirname, './setupTests.js')],
    roots: [path.resolve(__dirname, './src')],
    rootDir: path.resolve(__dirname),
    // verbose: true,
    // bail: 1,
    transform: {
        '^.+\\.(ts|tsx)?$': 'ts-jest',
        '^.+\\.(js|jsx)?$': 'babel-jest',
    },
    moduleNameMapper: {
        '^@\\/(.*)$': '<rootDir>/src/$1',
        '\\.(css)': 'identity-obj-proxy',
    },
    testMatch: ['**/__test__/**/*.js'],
    moduleFileExtensions: ['tsx', 'ts', 'js', 'jsx', 'json', 'node'],
    coverageDirectory: '<rootDir>/coverage',
    collectCoverageFrom: [
        'src/**/*.{js,jsx, ts, tsx }',
        '!tests/**/*',
        '!**/node_modules/**',
        '!scripts/**',
        '!dist/**',
        '!es/**',
        '!lib/**',
    ]
};