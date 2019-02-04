module.exports = function() {
  return {
    debug: false,
    files: [
      { pattern: 'packages/**/*.ts', load: false },
      { pattern: 'packages/**/*.json', load: false },
      { pattern: 'packages/**/*.test.ts', ignore: true },
      { pattern: 'packages/**/*.story.ts', ignore: true }
    ],
    tests: [{ pattern: 'packages/**/*.test.ts' }],
    env: { type: 'node' },
    testFramework: 'jest',
    setup(wallaby) {}
  }
}
