export default {
  preset: 'ts-jest',
  roots: ['<rootDir>/tests/'],
  moduleDirectories: ['node_modules', 'src'],
  moduleFileExtensions: ['js', 'ts', 'vue', 'tsx', 'jsx', 'json', 'node'],
  modulePaths: ['<rootDir>/src', '<rootDir>/node_modules'],
  testMatch: [
    '**/tests/**/*.[jt]s?(x)',
    '**/?(*.)+(spec|test).[tj]s?(x)',
    '(/__tests__/.*|(\\.|/)(test|spec))\\.(js|ts)$',
  ],
  testPathIgnorePatterns: ['<rootDir>/tests/server/', '/node_modules/'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  transformIgnorePatterns: ['/node_modules/'],
  // A map from regular expressions to module names that allow to stub out resources with a single module
  moduleNameMapper: {
    '^/@/(.*)$': '<rootDir>/src/$1',
  },
  testEnvironment: 'jsdom',
  verbose: true,
  collectCoverage: false,
  coverageDirectory: 'coverage',
  collectCoverageFrom: ['src/**/*.{js,ts,vue}'],
  coveragePathIgnorePatterns: ['^.+\\.d\\.ts$'],
}
