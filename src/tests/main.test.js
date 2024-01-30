import { JSDOM } from 'jsdom';
import { ageClassification, mainFunc, cbRandom, cbPow, cbAdd } from '../main';

const dom = new JSDOM();
global.window = dom.window;
global.document = dom.window.document;

// first test
const testCases = [
  [-1, null],
  [1, 'детский возраст'],
  [24, 'детский возраст'],
  [24.01, 'молодой возраст'],
  [44, 'молодой возраст'],
  [44.01, 'средний возраст'],
  [65, 'средний возраст'],
  [65.01, 'пожилой возраст'],
  [75, 'пожилой возраст'],
  [75.01, 'старческий возраст'],
  [90, 'старческий возраст'],
  [90.01, 'долгожители'],
  [122, 'долгожители'],
  [122.01, null],
  [150, null],
];

test.each(testCases)(
  'ageClassification returns %s for age %s',
  (age, expected) => {
    expect(ageClassification(age)).toEqual(expected);
  }
);

//second test
test.each([
  [2, 5, cbRandom, [2, 5]],
  [10, 30, cbRandom, [10, 30]],
  [2, 5, cbPow, 32],
  [2, 5, cbAdd, 7],
  [2, 5, 'not a func', false],
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