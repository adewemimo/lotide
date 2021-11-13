// Aseertion function for testing.
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

//Test case 1: Test for primitives values in the objects that they are equal.
const ab = {a: "1", b: "2"};
const ba = {b: "2", a: "1"};

eqObjects(ab, ba); // => true

assertEqual(eqObjects(ab, ba), true);

//Test case 2: Test objects that have array that they are equal.
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
eqObjects(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
eqObjects(cd, cd2); // => false

assertEqual(eqObjects(cd, cd2), false);
assertEqual(eqObjects(cd, dc), true);