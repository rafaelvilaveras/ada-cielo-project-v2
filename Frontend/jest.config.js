

module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    setupFilesAfterEnv: ['<rootDir>/.jest/setup-tests.js'],
    moduleNameMapper: {
        '\\.(gif|ttf|eot|svg|png)$' : '<rootDir>/.jest/mocks/fileMock.js',
        '\\.(css|less|sass|scss)$' : 'identity-obj-proxy',
        // '^image![a-zA-Z0-9$_-]+$': 'GlobalImageStub',
        // '^[./a-zA-Z0-9$_-]+\\.png$': '<rootDir>/RelativeImageStub.js',
        // 'module_name_(.*)': '<rootDir>/substituted_module_$1.js',
    }
};