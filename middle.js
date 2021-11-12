// Test functions eqArrays and assertArraysEqual
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
  
const assertArraysEqual = function(actualArray, expectedArray) {
  if (eqArrays(actualArray, expectedArray)) {
    console.log(`✅✅✅ Assertion Passed: ${actualArray} === ${expectedArray}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actualArray} !== ${expectedArray}`);
  }
};

//Return the middle element of an array.
const middle = function(array) {
  if (array.length <= 2) {
    return [];
  }
  if (array.length % 2 !== 0) {
    let middleNumber = Math.round(array.length / 2);
    return ([array[middleNumber - 1]]);
  }
  if (array.length % 2 === 0) {
    let middleNumber = array.length / 2;
    return ([array[middleNumber - 1],array[middleNumber]]);
  }
};

assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([2, 2]), []);
assertArraysEqual(middle([2, 8, 6]), [8]);
assertArraysEqual(middle([2, 8, 6, 4]), [8, 6]);
assertArraysEqual(middle([2, 8, 6, 4, 2]), [6]);


