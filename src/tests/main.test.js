import { ageClassification} from '../main';

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
  [0, null],
  [-5, null],
  [150.01, null],
  [null, null],
  [undefined, null],
  ['invalid', null],
];

test.each(testCases)(
  'ageClassification returns %s for age %s',
  (age, expected) => {
    expect(ageClassification(age)).toEqual(expected);
  }
);