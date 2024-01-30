//second test
import { mainFunc, cbRandom, cbPow, cbAdd } from '../main';

test.each([
  [2, 5, cbRandom, [2, 5]],
  [10, 30, cbRandom, [10, 30]],
  [2, 5, cbPow, 32],
  [2, 5, cbAdd, 7],
  [2, 5, 'not a func', false],
  [0, 0, cbRandom, [0, 0]],
  [-5, 5, cbRandom, expect.any(Number)],
  [5, 2, cbRandom, expect.any(Number)],
  [2, 5, null, false],
  [2, 5, undefined, false],
])(
  'mainFunc(%d, %d, %p) should return %p',
  (a, b, func, expected) => {
    const result = mainFunc(a, b, func);

    if (Array.isArray(expected)) {
      expect(result).toBeGreaterThanOrEqual(expected[0]);
      expect(result).toBeLessThanOrEqual(expected[1]);
    } else {
      expect(result).toEqual(expected);
    }
  }
);