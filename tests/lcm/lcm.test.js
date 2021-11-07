const numbersIcm = require('./lcm');

let n = 10; // default testing param
let m = 20; // default testing param

describe('testing lcm function', () => {
  test('if empty should be []', () => {
    expect(numbersIcm()).toEqual([]);
  });

  test('if only one param should be []', () => {
    expect(numbersIcm(5)).toEqual([]);
  });

  test('if 0 should be []', () => {
    expect(numbersIcm(0)).toEqual([]);
    expect(numbersIcm(0, 0)).toEqual([]);
  });

  test('should be less then nm equal 1020', () => {
    const high = Number(`${n}${m}`); // concat numbers

    numbersIcm(n, m).map((val) => {
      expect(val).toBeLessThan(high);
    });
  });

  test('if n= 9, m= 5 shoud be [45, 90]', () => {
    n = 9; // change testing param
    m = 5; // change testing param
    const toBeMuch = [45, 90];

    expect(numbersIcm(n, m)).toEqual(toBeMuch);
  });
  test('if n= 13, m= 12 shoud be [156, 312, 468, 624, 780, 936, 1092, 1248]', () => {
    n = 13; // change testing param
    m = 12; // change testing param
    const toBeMuch = [156, 312, 468, 624, 780, 936, 1092, 1248];

    expect(numbersIcm(n, m)).toEqual(toBeMuch);
  });
  test('if n= 13, m= 12 shoud be [130, 260, 390, 520, 650, 780, 910, 1040, 1170, 1300]', () => {
    n = 13; // change testing param
    m = 10; // change testing param
    const toBeMuch = [130, 260, 390, 520, 650, 780, 910, 1040, 1170, 1300];

    expect(numbersIcm(n, m)).toEqual(toBeMuch);
  });
});
