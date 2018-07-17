module.exports = {
  roots: ["./src"],
  transform: {
    "^.+\\.tsx?$": "babel-jest",
    ".+\\.(css|sass|scss|png|jpg|ttf|woff|woff2)$": "jest-transform-stub"
  },
  testRegex: "/src/__tests__/.*\\.tsx?$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],

  // Set up code coverage
  //collectCoverage: true,
  //collectCoverageFrom: ["**/src/**.{js,jsx,ts,tsx}"],
  //coverageDirectory: "coverage",

  // Setup Enzyme
  snapshotSerializers: ["enzyme-to-json/serializer"],
  // Tried these with no luck...
  //setupTestFrameworkScriptFile: "./src/setupEnzyme.ts" // Works in Jest
  //setupTestFrameworkScriptFile: "src/setupEnzyme.ts" // Does not work in Jest
  setupTestFrameworkScriptFile: "<rootDir>/src/setupEnzyme.ts" // Works in Jest
};
