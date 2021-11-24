const findKeyByValue = require('../findKeyByValue');
const assert = require('chai').assert;

describe('#findKeyByValue', () => {
  it('should return the key as output when giving its value to search the object with', () => {
    const bestTVShowsByGenre = {
      sciFi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama:  "The Wire"
    };

    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");

    const ingredient = {
      meat: "chicken",
      vegetables: "lettuce",
      sauce: "tomato",
      cheese: "mozzarella",
    };

    assert.strictEqual(findKeyByValue(ingredient, "mozzarella"), "cheese");
  });
  it('should return undefined when the value to search the object does not exist in the object', () => {
    const bestTVShowsByGenre = {
      sciFi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama:  "The Wire"
    };

    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

    const ingredient = {
      meat: "chicken",
      vegetables: "lettuce",
      sauce: "tomato",
      cheese: "mozzarella",
    };

    assert.strictEqual(findKeyByValue(ingredient, "cabbage"), undefined);

  });
});
