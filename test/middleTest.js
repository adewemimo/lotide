const assert = require('chai').assert;
const middle = require('../middle');

//test cases
describe('#middle', () => {
  it('returns [] for [1]', () => {
    assert.deepEqual(middle([1]), []);
  });
    
  it('returns [] for [2, 2]', () => {
    assert.deepEqual(middle([2, 2]), []);
  });
    
  it('returns [8] for [2, 8, 6]', () => {
    assert.deepEqual(middle([2, 8, 6]), [8]);
  });
    
  it('returns [8, 6] for [2, 8, 6, 4]', () => {
    assert.deepEqual(middle([2, 8, 6, 4]), [8, 6]);
  });
    
  it('returns [6] for [2, 8, 6, 4, 2]', () => {
    assert.deepEqual(middle([2, 8, 6, 4, 2]), [6]);
  });
});