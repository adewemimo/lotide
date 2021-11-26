// function takeUntil(array, callback): returns an array of elements from the beginning of the array until the callback returns a truthy value that satisfy the condition in the callback.
const takeUntil = (array, callback) => {
  for (let element of array) {
    if (callback(element)) {
      return array.slice(0, array.indexOf(element));
    }
  }
};

module.exports = takeUntil;
