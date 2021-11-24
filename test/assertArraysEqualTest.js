const assertArraysEqual = require('../assertArraysEqual');

describe('#assertArraysEqual', () => {
  it('should return true if both arrays are equal', () => {
    const ab = [1, 2, 3];
    const ba = [1, 2, 3];
    assertArraysEqual(ab, ba);
  });
  it('should return false if both arrays are not equal', () => {
    const ab = [1, 2, 3];
    const ba = [1, 2, 4];
    assertArraysEqual(ab, ba);
  });
  it('should return true if both arrays are empty', () => {
    const ab = [];
    const ba = [];
    assertArraysEqual(ab, ba);
  });
  it('should return false if both arrays are not empty and have different length', () => {
    const ab = [1, 2, 3, 4];
    const ba = [1, 2];
    assertArraysEqual(ab, ba);
  });
  it('should return true if both arrays even with the same string values and equal length', () => {
    const ab = ["1", "2", "Tobe"];
    const ba = ["1", "2", "Tobe"];
    assertArraysEqual(ab, ba);
  });
});

