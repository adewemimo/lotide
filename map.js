// Test functions: eqArrays and assertArraysEqual
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

//function map that takes an array and a callback function and returns a new array of the results of the callback function
const words = ['ground', 'control', 'to', 'major', 'tom'];

const map = function (array, callback) {
  const results = [];

  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const results1 = map(words, word => word[0]);

//Test cases
assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);
assertArraysEqual(map([4, 6, 8], num => num * 2), [8, 12, 16]);
assertArraysEqual(map(['tin', 'smart', 'hard'], item => item.length), [3, 5, 4]);