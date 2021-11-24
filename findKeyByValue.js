//Function to find the key of an object by its value
const findKeyByValue = function(inputObject, value) {
  for (const key of Object.keys(inputObject)) {
    if (inputObject[key] === value) {
      return key;
    }
  }
  return undefined;
};

module.exports = findKeyByValue;