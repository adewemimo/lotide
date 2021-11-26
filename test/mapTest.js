const map = require('../map');
const assert = require('chai').assert;

describe("#map", () => {
  it(`should return output array with the elements as first letters of the array words passed in the map function`, () => {
    const words = ['ground', 'control', 'to', 'major', 'tom'];
    const results = map(words, word => word[0]);
    assert.deepEqual(results, ['g', 'c', 't', 'm', 't']);
  });

  it(`should return array [2, 4, 6, 8, 10] as the output when [1, 2, 3, 4, 5] and callback function is passed as input`, () => {
    const numbers = [1, 2, 3, 4, 5];
    const results = map(numbers, number => number * 2);
    assert.deepEqual(results, [2, 4, 6, 8, 10]);
  });

  it('should return an array with the lengths of the items in array', () => {
    const words = ['tin', 'smart', 'hard', 'to', 'code'];
    const results = map(words, word => word.length);
    assert.deepEqual(results, [3, 5, 4, 2, 4]);
  });
});

