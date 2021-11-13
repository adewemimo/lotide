//Assertion function
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
  
};
  
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

//test cases
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3", "4"]), false);
//As per requirement, it is okay for the same nested arrays to not pass the test at this time
assertEqual(eqArrays([[1,2,3], [1,2,3,4]], [[1,2,3], [1,2,3,4]]),false);
assertEqual(eqArrays([{0:"biscuits", 1:"tea"}, {0:"spoon", 1:"cups"}], [{0:"biscuits", 1:"tea"}, {0:"spoon", 1:"cups"}]),false);