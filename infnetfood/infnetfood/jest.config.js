module.exports = {
    preset: 'react-native',
    transform: {
        '^.+\.js$': '<rootDir>/node_modules/react-native/jest/preprocessor.js',
    },
    setupFiles: ['<rootDir>/jest-setup.js'],
    setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
};