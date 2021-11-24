const assert = require('chai').assert;
const eqObjects = require('../eqObjects');

describe('#eqObjects', () => {
  it('should return true if both objects have identical keys with identical values', () => {
    const ab = { a: "1", b: "2" };
    const ba = { b: "2", a: "1" };
    assert.strictEqual(eqObjects(ab, ba), true);
  });
  it('should return false if both objects have identical keys with different values', () => {
    const ab = { a: "1", b: "3" };
    const ba = { b: "3", a: "5" };
    assert.strictEqual(eqObjects(ab, ba), false);
  });
  it('should return false if both objects have different keys', () => {
    const ab = { a: "4", b: "26" };
    const ba = { b: "26", c: "4" };
    assert.strictEqual(eqObjects(ab, ba), false);
  });

  it('should return false if length of both objects are not equal', () => {
    const ab = { a: "4", b: "26", d: "4" };
    const ba = { b: "26" };
    assert.strictEqual(eqObjects(ab, ba), false);
  });
  it('should return true for objects with arrays and the objects are equal', () => {
    const cd = { c: "1", d: ["2", 3] };
    const dc = { d: ["2", 3], c: "1" };
    assert.deepEqual(eqObjects(cd, dc), true);

  });
  it('should return false for objects with arrays and the objects are not equal in length', () => {
    const cd = { c: "1", d: ["2", 3, 4] };
    const dc = { d: ["2", 3], c: "1" };
    assert.deepEqual(eqObjects(cd, dc), false);
  });
});
