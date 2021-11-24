const eqArrays = require('../eqArrays');
const {expect} = require('chai');

describe('#eqArrays', () => {
  it('should return true for arrays with equal length and the type of values e.g. numbers', () => {
    expect(eqArrays([1, 2, 3], [1, 2, 3])).to.equal(true);
  });

  it('should return true for arrays with equal length and the type of values e.g. strings', () => {
    expect(eqArrays(["1", "2", "3"], ["1", "2", "3"])).to.equal(true);
  });

  it('should return false for arrays with unequal length', () => {
    expect(eqArrays(["1", "2", "3"], ["1", "2", "3", "4"])).to.equal(false);
  });
  it('should return false for array that have the same value type but not the same value', () =>{
    expect(eqArrays([1, 2, 3], [3, 2, 1])).to.equal(false);
  });
  it('should return false for arrays with when they do not have same value types', () => {
    expect(eqArrays(["1", "2", "3"], ["1", 2, 3])).to.equal(false);
  });
  it('should return false for the same nested arrays. It is okay for test not to pass now', () => {
    expect(eqArrays([{0:"biscuits", 1:"tea"}, {0:"spoon", 1:"cups"}], [{0:"biscuits", 1:"tea"}, {0:"spoon", 1:"cups"}])).to.equal(false);
  });

});

