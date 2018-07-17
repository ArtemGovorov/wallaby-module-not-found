// const typescriptJson = require('./tsconfig.json');
// const babelCore = require('@babel/core');

module.exports = wallaby => ({
  // module.exports = () => ({
  name: "Wallaby: Branching 360 Visual Editor",

  files: [
    "tsconfig.json",
    // These are all trying to add setupEnzyme.ts...
    "./setupEnzyme.ts",
    "setupEnzyme.ts",

    // This fixes the error but no tests run
    //"**/*.{js,jsx,ts,tsx}",

    "src/**/*.{js,jsx,ts,tsx}",
    "src/**/*.{css,sass,scss}",
    "!src/**/__tests__/**/*.{js,jsx,ts,tsx}",
    "!package.json"
  ],
  tests: ["src/__tests__/**/*.{js,jsx,ts,tsx}"],

  // Don't do coverage for these files, don't include them in the calculated code coverage
  // filesWithNoCoverageCalculated: ['src/setupEnzyme.ts'],

  compilers: {
    "**/*.{js,jsx,ts,tsx}": wallaby.compilers.babel({
      //    // babel: babelCore,
      //    // presets: ['react-app'],
    })
    // '**/*.{ts|tsx}': wallaby.compilers.typeScript({
    //  typescript: typescriptJson,
    // }),
  },

  env: {
    type: "node",
    runner: "node"
  },

  testFramework: "jest"
});
