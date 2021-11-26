// FUNCTION IMPLEMENTATION
//return true if both arrays are identical
const eqObjects = require('./eqObjects');

const assertObjectsEqual = function(actualObject, expectedObject) {
  const inspect = require('util').inspect; // <= add this line
  if (eqObjects(actualObject, expectedObject)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actualObject)} === ${inspect(expectedObject)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actualObject)} !== ${inspect(expectedObject)}`);
  }
};

module.exports = assertObjectsEqual;

