const assertObjectsEqual = require('../assertObjectsEqual');

describe('#assertObjectsEqual', () => {
  it('should return passed when input object is equal to output object', () => {
    const ab = {a: "1", b: "2"};
    const ba = {b: "2", a: "1"};
    const cd = { c: "1", d: ["2", 3] };
    const dc = { d: ["2", 3], c: "1" };

    assertObjectsEqual(ab, ba);
    assertObjectsEqual(cd, dc);

  });
  it('should return failed when input object is not equal to output object', () => {
    const cd = { c: "1", d: ["2", 3] };
    const cd2 = { c: "1", d: ["2", 3, 4] };
    
    assertObjectsEqual(cd, cd2);

  });
});

