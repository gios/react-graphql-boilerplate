module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  collectCoverageFrom: ["./src/**"],
  coverageDirectory: "./coverage",
  moduleNameMapper: {
    "\\.(css|less|scss)$": "identity-obj-proxy",
  },
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
};
