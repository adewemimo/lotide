# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @seunsoetan/lotide`

**Require it:**

`const _ = require('@seunsoetan/lotide');`

**Call it:**

`const results = _.head([1, 2, 3]) // => 1`

## Documentation

The following functions are currently implemented:

* `function head(array)`: returns the head - (first element) in an array.
* `function middle(array)`: returns the middle element of an array.
* `function countOnly(allItems, itemsToCount)`: allItems: an array of strings that we need to look through. itemsToCount: an object with items/strings to count as key and a boolean value (true or false) that specify is to count the item in the allItems array.
* `function eqArrays(array1, array2)`: returns true if both arrays are identical.
* `function eqObjects(object1, object2)`: returns true if objects(objects could contain arrays or primitive values) are equal and identical.
* `function findKey(object, callback)`: A higher order function findKey that returns the first key in the object that satisfy the condition in the callback and returns a truthy value.
* `function findKeyByValue(inputObject, value)`: find the key in an object by its value.
* `function map(array, callback)`: A higher order function map that takes an array and any callback function and returns a new array of the results of the callback function.
* `function takeUntil(array, callback)`: A higher order function - takeUntil that returns an array of elements from the beginning of the array to the item that satisfies the callback's truthy value returned as output.
* `function without(sourceArray, itemsToRemoveArray)`: function without that takes an array and a list of items and returns the array without the items in itemsToRemoveArray.
* `function assertEqual(actual, expected)`: custom assert function to test that primitive output from a function(actual) is equal to the expected(also a primitive value).
* `function assertArraysEqual(actualArray, expectedArray)`:  custom assert function to test that array output from a function(actual) is equal to the expected(also an array).
* `function assertObjectsEqual(actualObject, expectedObject)`: custom assert function to test that object output from a function(actual) is equal to the expected(also an object).
