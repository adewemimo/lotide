const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

//test cases
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([2, 2]), []);
assertArraysEqual(middle([2, 8, 6]), [8]);
assertArraysEqual(middle([2, 8, 6, 4]), [8, 6]);
assertArraysEqual(middle([2, 8, 6, 4, 2]), [6]);