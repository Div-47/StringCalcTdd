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

  test('handles newlines between numbers', () => {
    expect(add("1\n2,3")).toBe(6);
  });

  test('supports custom delimiter ";"', () => {
    expect(add("//;\n1;2")).toBe(3);
  });

  test('supports custom delimiter "|"', () => {
    expect(add("//|\n4|5|6")).toBe(15);
  });

  test('supports custom delimiter "," again', () => {
    expect(add("//,\n7,3")).toBe(10);
  });

  test('ignores numbers greater than 1000', () => {
    expect(add("2,1001")).toBe(2);
  });

  test('throws error for negative numbers with list', () => {
    expect(() => add("1,-2,-3,4")).toThrow("negative numbers not allowed -2, -3");
  });
});
