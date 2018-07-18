module.exports = wallaby => ({
  name: "Wallaby",

  files: [
    "tsconfig.json",
    {pattern: ".babelrc", instrument: false},
    "src/**/*.{js,jsx,ts,tsx,css,sass,scss}",
    "!src/**/__tests__/**/*.{js,jsx,ts,tsx}"
  ],
  tests: ["src/__tests__/**/*.{js,jsx,ts,tsx}"],

  // Don't do coverage for these files, don't include them in the calculated code coverage
  // filesWithNoCoverageCalculated: ['src/setupEnzyme.ts'],

  compilers: {
    "**/*.{js,jsx}": wallaby.compilers.babel()
  },

  env: {
    type: "node",
    runner: "node"
  },

  testFramework: "jest"
});
