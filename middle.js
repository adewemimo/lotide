//Return the middle element of an array.
const middle = function(array) {
  if (array.length <= 2) {
    return [];
  }
  if (array.length % 2 !== 0) {
    let middleNumber = Math.round(array.length / 2);
    return ([array[middleNumber - 1]]);
  }
  if (array.length % 2 === 0) {
    let middleNumber = array.length / 2;
    return ([array[middleNumber - 1],array[middleNumber]]);
  }
};

module.exports = middle;




