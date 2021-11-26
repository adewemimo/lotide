const eqArrays = require('./eqArrays');
// Returns true if both objects have identical keys with identical values.
// Otherwise return false.
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

module.exports = eqObjects;

