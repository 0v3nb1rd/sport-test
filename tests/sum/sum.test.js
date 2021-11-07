const sum = require('./sum');

describe('checks to equal', () => {
  test('if empty should return 0', () => {
    expect(sum()).toBe(0);
  });

  test('if negative digit, should remove negative symbvol -55 equal 10', () => {
    expect(sum(-55)).toBe(10);
  });

  test('should not to be a string', () => {
    expect(sum('')).toBe(0);
  });

  test('should add all digits 5 + 0 + 1 + 0 + 2 to equal 8', () => {
    expect(sum('50102')).toBe(8);
  });

  test('if one digit should return it', () => {
    expect(sum(5)).toBe(5);
  });

  test('should add 5 + 5 + 5 to equal 15', () => {
    expect(sum(555)).toBe(15);
  });

  test('should 2 + 5 + 2 + 5 + 2 + 5 + 2 + 5 to equal 28', () => {
    expect(sum(25252525)).toBe(28);
  });
});
