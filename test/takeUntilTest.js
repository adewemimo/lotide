const takeUntil = require('../takeUntil');
//const {expect} = require('chai');
const {assert} = require('chai');

describe('#takeUntil', () => {
  it('should return output [1, 2, 5, 7, 2] when array [1, 2, 5, 7, 2, -1, 2, 4, 5] and callback function is passed as input', () => {
    const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
    const results1 = takeUntil(data1, x => x < 0);
    assert.deepEqual(results1, [1, 2, 5, 7, 2]);
  });

  it('should return a slice of the array as output before the element ","', () => {
    const data1 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
    const results1 = takeUntil(data1, x => x === ',');
    assert.deepEqual(results1, ["I've", "been", "to", "Hollywood"]);
  });
});

