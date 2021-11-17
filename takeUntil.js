//Test functions: eqArrays and assertArraysEqual to test takeUntil function
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


// function takeUntil(array, callback): returns an array of elements from the beginning of the array until the callback returns true.
const takeUntil = (array, callback) => {
  for (let element of array) {
    if (callback(element)) {
      return array.slice(0, array.indexOf(element));
    }
  }
};
// Expected Inputs to function takeUntil:
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);
console.log('---');

// Expected Outputs from function takeUntil:
// [1, 2, 5, 7, 2]
// ["I've", "been", "to", "Hollywood"]

//Test cases
assertArraysEqual(results1, [1, 2, 5, 7, 2]);
assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]);
