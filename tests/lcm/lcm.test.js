const numbersIcm = require('./lcm');

let n = 10; // default testing param
let m = 20; // default testing param

describe('testing lcm function', () => {
  test('if empty should be equal []', () => {
    expect(numbersIcm()).toEqual([]);
  });

  test('if only one param should be equal []', () => {
    expect(numbersIcm(5)).toEqual([]);
  });

  test('if 0 should be equal []', () => {
    expect(numbersIcm(0)).toEqual([]);
    expect(numbersIcm(0, 0)).toEqual([]);
  });

  test('if n = 10 * m = 20 should be less then 200', () => {
    numbersIcm(n, m).map((val) => {
      expect(val).toBeLessThan(n * m);
    });
  });

  test('if n = 10, m = 20 shoud be equal [20, 40, 60, 80, 100, 120, 140, 160, 180]', () => {
    const toBeMuch = [20, 40, 60, 80, 100, 120, 140, 160, 180];
    expect(numbersIcm(n, m)).toEqual(toBeMuch);
  });

  test('if n = 10, m = 15 shoud be equal [30, 60, 90, 120]', () => {
    m = 15; // change testing param
    const toBeMuch = [30, 60, 90, 120];

    expect(numbersIcm(n, m)).toEqual(toBeMuch);
  });

  test('if n= 9, m= 5 shoud be equal [495, 990, 1485, 1980, 2475, 2970, 3465, 3960, 4455, 4950]', () => {
    n = 99; // change testing param
    m = 55; // change testing param
    const toBeMuch = [495, 990, 1485, 1980, 2475, 2970, 3465, 3960, 4455, 4950];

    expect(numbersIcm(n, m)).toEqual(toBeMuch);
  });
});
