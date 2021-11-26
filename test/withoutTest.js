const without = require('../without');
const {assert} = require('chai');

describe('#without', () => {
  it('should return as output the array which does not contain the items that should have been removed', () => {
    assert.deepEqual(without([1, 2, 3], [1]), [2, 3]);
    assert.deepEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
    assert.deepEqual(without(["1", "2", "3"], []), ["1", "2", "3"]);
    assert.deepEqual(without([1, 2, 3], [1, 3]), [2]);
  });

  it('should not mutate the original array past as input', () => {
    const words = ["hello", "world", "lighthouse"];
    without(words, ["lighthouse"]);
    assert.deepEqual(words, ["hello", "world", "lighthouse"]);
  });
});



