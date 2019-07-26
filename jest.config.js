module.exports = {
  roots: ['<rootDir>/tests'],
  globalSetup: './tests/cfg/globalSetup.js',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testRegex: '(/tests/.*|(\\.|/)(test|spec))\\.tsx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testEnvironment: 'node',
  collectCoverageFrom: ['src/**/*.ts'],
};
