var assert = require('assert');
var expect = require('chai').expect;
var index = require('../index')

describe('index', function() {
  describe('#listTail()', function() {
    const basicNumbersArray = [3, 1, 4, 1, 5, 9]
    const basicLettersAndNumbersObjectMap = {
      a : 1,
      b : 2,
      c : 3,
      d : 4
    }
    
    //BEGIN: Array testing

    it('should return the last two items in the list when list tails is 2', function() {
      assert.deepEqual(
        index.listTail(basicNumbersArray, 2),
        [5, 9]
      )
    });

    it('should return an empty array if list tails is 0', function() {
      assert.deepEqual(
        index.listTail(basicNumbersArray, 0),
        []
      )
    });

    it('should return an empty array if the given list is empty and list tails is 0', function() {
      assert.deepEqual(
        index.listTail([], 0),
        []
      )
    });

    it('should return the same list when given the length of the list', function() {
      assert.deepEqual(
        index.listTail(basicNumbersArray, basicNumbersArray.length),
        basicNumbersArray
      )
    });

    //END: Array testing

    //BEGIN: Error testing
    
    const nonIntegerNumberOfTails = 1.5
    it('should throw an error when the number of tails is not an integer', function () {
      expect(function(){
        index.listTail([], nonIntegerNumberOfTails)
      }).to.throw("The number of tails: " + nonIntegerNumberOfTails + ", needs to be an integer")
    });

    const greaterNumberOfTailsArray = basicNumbersArray.length + 1
    it('should throw an error when the number of tails exceeds the length of the array', function () {
      expect(function(){
        index.listTail(basicNumbersArray, greaterNumberOfTailsArray)
      }).to.throw("The number of tails: " + greaterNumberOfTailsArray + ", exceeds the length of the array: " + basicNumbersArray.length)
    });

    const greaterThanEmptyTailsValue = 5
    it('should throw an error when the array is empty and the number of tails is non-zero', function () {
      expect(function(){
        index.listTail([], greaterThanEmptyTailsValue)
      }).to.throw("The number of tails: " + greaterThanEmptyTailsValue + ", exceeds the length of the array: " + 0)
    });

    const objLength = Object.keys(basicLettersAndNumbersObjectMap).length
    const greaterNumberOfTailsObject = objLength + 1
    it('should throw an error when the number of tails exceeds the number of keys in the object', function () {
      expect(function(){
        index.listTail(basicLettersAndNumbersObjectMap, greaterNumberOfTailsObject)
      }).to.throw("The number of tails: " + greaterNumberOfTailsObject + ", exceeds the number of keys in the object: " + objLength)
    });

    it('should throw an error when the object is empty and the number of tails is non-zero', function () {
      expect(function(){
        index.listTail({}, greaterNumberOfTailsObject)
      }).to.throw("The number of tails: " + greaterNumberOfTailsObject + ", exceeds the number of keys in the object: " + 0)
    });

    it('should throw an error when the number of tails is negative', function () {
      expect(function(){
        index.listTail({}, -1)
      }).to.throw("The number of tails: " + -1 + ", needs to be greater than 0")
    });

    //END: Error testing

    //BEGIN: Object testing

    it('should return an empty object when an empty object and 0 are given', function(){
      assert.deepEqual(
        index.listTail({}, 0),
        {}
      )
    });

    it('should return an object with the last two key/values when an object and 2 are given', function(){
      assert.deepEqual(
        index.listTail(basicLettersAndNumbersObjectMap, 2),
        {
          c : 3,
          d : 4
        }
      )
    });

    it('should return an empty object with an filled object and 0 for the number of tails', function(){
      assert.deepEqual(
        index.listTail(basicLettersAndNumbersObjectMap, 0),
        {}
      )
    });

    it('should return the same object if given the object length', function(){
      assert.deepEqual(
        index.listTail(basicLettersAndNumbersObjectMap, Object.keys(basicLettersAndNumbersObjectMap).length),
        basicLettersAndNumbersObjectMap
      )
    });


    //END: Object testing

  });
});