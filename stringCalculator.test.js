const { add } = require('./src/stringCalculator');

describe('String Calculator TDD Kata', () => {
  test('returns 0 for empty string', () => {
    expect(add("")).toBe(0);
  });

  test('returns number itself for one number', () => {
    expect(add("1")).toBe(1);
  });
});
