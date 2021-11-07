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

  test('if n= 13, m= 12 shoud be equal [156]', () => {
    n = 13; // change testing param
    m = 12; // change testing param
    const toBeMuch = [156];

    expect(numbersIcm(n, m)).toEqual(toBeMuch);
  });

  test('if n= 9, m= 5 shoud be equal [45, 90, 135, 180]', () => {
    n = 9; // change testing param
    m = 5; // change testing param
    const toBeMuch = [45, 90, 135, 180];

    expect(numbersIcm(n, m)).toEqual(toBeMuch);
  });

  test('if n= 25, m= 25 shoud be equal [25, 50, 75, 100, 125, 150, 175]', () => {
    n = 25; // change testing param
    m = 25; // change testing param

    const toBeMuch = [25, 50, 75, 100, 125, 150, 175];

    expect(numbersIcm(n, m)).toEqual(toBeMuch);
  });
});
