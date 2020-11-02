module.exports = {
  preset            : 'ts-jest',
  verbose           : true,
  testEnvironment   : 'node',
  testMatch         : ['**/tests/**/*.spec.[jt]s?(x)'],
  automock          : false,
  collectCoverage   : true,
  coverageThreshold : {
    global : {
      branches  : 100,
      functions : 100,
      lines     : 100,
    },
  },
  collectCoverageFrom : [
    '**/functions/**/*.ts',
    '!**/jest.config.js',
    '!**/node_modules/**',
    '!**/vendor/**',
  ],
  moduleDirectories : [
    'node_modules',
  ],
  moduleNameMapper : {
    '^functions(.*)$' : '<rootDir>/functions$1',
    '^libs(.*)$'      : '<rootDir>/libs$1',
    '^config(.*)$'    : '<rootDir>/config$1',
    '^tests(.*)$'     : '<rootDir>/tests$1',
  },
};
