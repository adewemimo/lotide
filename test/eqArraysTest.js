const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

//test cases
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3", "4"]), false);
//As per requirement, it is okay for the same nested arrays to not pass the test at this time
assertEqual(eqArrays([[1,2,3], [1,2,3,4]], [[1,2,3], [1,2,3,4]]),false);
assertEqual(eqArrays([{0:"biscuits", 1:"tea"}, {0:"spoon", 1:"cups"}], [{0:"biscuits", 1:"tea"}, {0:"spoon", 1:"cups"}]),false);