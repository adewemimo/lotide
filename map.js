//A higher order function map that takes an array and a callback function and returns a new array of the results of the callback function
const map = function(array, callback) {
  const results = [];

  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

module.exports = map;