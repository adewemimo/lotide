// function assertEqual(actual, expected): to test the findKey function
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
  
};

//function findKey(object, callback): returns the first key in the object that satisfy the condition in the callback and returns a truthy value.
const findKey = function(object, callback) {
  for (const key of Object.keys(object)) {
    if (callback(object[key])) {
      return key;
    }
  }
  return undefined;
};



// expected input and output of the function findKey
const result1 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2); // => "noma"

console.log(result1);

//test cases
assertEqual(result1, "noma");
assertEqual(findKey({
  "Red Notice": {ratings: 2},
  "Hustle":     {ratings: 3},
  "Alter Ego": {ratings: 4},
  "Squid Game": {ratings: 5}
}, x => x.ratings < 4), "Red Notice");

assertEqual(findKey({
  "Red Notice": {ratings: 2},
  "Hustle":     {ratings: 3},
  "Alter Ego": {ratings: 4},
  "Squid Game": {ratings: 5}
}, x => x.ratings === 1), undefined);

assertEqual(findKey({
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
}, x => x === "The Wire"), "drama");

assertEqual(findKey({
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
}, x => x === "Brooklyn"), undefined);