//function findKey(object, callback): returns the first key in the object that satisfy the condition in the callback and returns a truthy value.
const findKey = function(object, callback) {
  for (const key of Object.keys(object)) {
    if (callback(object[key])) {
      return key;
    }
  }
  return undefined;
};

module.exports = findKey;



