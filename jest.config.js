module.exports = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest", // Use babel-jest for transforming JS/TS files
  },
  transformIgnorePatterns: [
    "node_modules/(?!(react-syntax-highlighter)/)", // Transform react-syntax-highlighter and any other ES module libraries
  ],
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy", // Mock CSS imports
  },
};
