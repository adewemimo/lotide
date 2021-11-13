// FUNCTION IMPLEMENTATION
//return true if both arrays are identical
const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};
  
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = (object1, object2) => {
  let object1Keys = Object.keys(object1);
  let object2Keys = Object.keys(object2);
  if (object1Keys.length !== object2Keys.length) {
    return false;
  }
  for (let key of object1Keys) {
    if (typeof object1[key] === 'object' && typeof object2[key] === 'object') {
      let result = eqArrays(object1[key], object2[key]);
      if (!result) {
        return false;
      }
    } else {
  
      if (object1[key] !== object2[key]) {
        return false;
      }
    }
  }
  return true;
};
  
const assertObjectsEqual = function(actualObject, expectedObject) {
  const inspect = require('util').inspect; // <= add this line
  if (eqObjects(actualObject, expectedObject)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actualObject)} === ${inspect(expectedObject)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actualObject)} !== ${inspect(expectedObject)}`);
  }
};

const ab = {a: "1", b: "2"};
const ba = {b: "2", a: "1"};
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };

assertObjectsEqual(ab, ba);
assertObjectsEqual(cd, dc);
assertObjectsEqual(cd, cd2);