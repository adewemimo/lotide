//Assertion Function
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

//Function to find the key of an object by its value
const findKeyByValue = function(inputObject, value) {
  for (const key of Object.keys(inputObject)) {
    if (inputObject[key] === value) {
      return key;
    }
  }
  return undefined;
};

//test cases for the function - findKeyByValue
const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};
  
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

const ingredient = {
  meat: "chicken",
  vegetables: "lettuce",
  sauce: "tomato",
  cheese: "mozzarella",
};
assertEqual(findKeyByValue(ingredient, "mozzarella"), "cheese");
assertEqual(findKeyByValue(ingredient, "chicken"), "meat");
assertEqual(findKeyByValue(ingredient, "cabbage"), undefined);