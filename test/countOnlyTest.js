const countOnly = require('../countOnly');
const assert = require('chai').assert;

//call the function and test that the counts of the items are correct
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

describe('#countOnly', () => {
  it('should return 1 for "Jason" to show that countOnly is correct', () => {
    assert.strictEqual(result1["Jason"], 1);
  });
  it('should return undefined for "Karima" to show that countOnly is correct. Karima is not in firstName array', () => {
    assert.strictEqual(result1["Karima"], undefined);
  });
  it('should return 2 for "Fang" to show that countOnly is correct', () => {
    assert.strictEqual(result1["Fang"], 2);
  });

  it('should return undefined for "Agouhanna" to show that countOnly is correct. Agouhanna key has false value for Items to Count array', () => {
    assert.strictEqual(result1["Agouhanna"], undefined);
  });

});
    
 