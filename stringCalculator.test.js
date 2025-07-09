const { add } = require('./src/stringCalculator');

describe('String Calculator TDD Kata', () => {
  test('returns 0 for empty string', () => {
    expect(add("")).toBe(0);
  });

  test('returns number itself for one number', () => {
    expect(add("1")).toBe(1);
  });

  test('adds two numbers', () => {
    expect(add("1,2")).toBe(3);
  });

  test('adds multiple numbers', () => {
    expect(add("1,2,3,4,5")).toBe(15);
  });

  
});
