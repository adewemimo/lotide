//Function Implementation
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }

};

//Test code
assertEqual("Lighthouse Labs", "BootCamp");
assertEqual(1, 1);
assertEqual(12, 1);
assertEqual("Lighthouse Labs", "Lighthouse Labs");