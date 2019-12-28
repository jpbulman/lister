var assert = require('assert')
var expect = require('chai').expect
var index = require('../index')
var createLists = require('../createLists')

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
    })

    it('should return an empty array if list tails is 0', function() {
      assert.deepEqual(
        index.listTail(basicNumbersArray, 0),
        []
      )
    })

    it('should return an empty array if the given list is empty and list tails is 0', function() {
      assert.deepEqual(
        index.listTail([], 0),
        []
      )
    })

    it('should return the same list when given the length of the list', function() {
      assert.deepEqual(
        index.listTail(basicNumbersArray, basicNumbersArray.length),
        basicNumbersArray
      )
    })

    //END: Array testing

    //BEGIN: Error testing
    
    const nonIntegerNumberOfTails = 1.5
    it('should throw an error when the number of tails is not an integer', function () {
      expect(function(){
        index.listTail([], nonIntegerNumberOfTails)
      }).to.throw("The number of tails: " + nonIntegerNumberOfTails + ", needs to be an integer")
    })

    const greaterNumberOfTailsArray = basicNumbersArray.length + 1
    it('should throw an error when the number of tails exceeds the length of the array', function () {
      expect(function(){
        index.listTail(basicNumbersArray, greaterNumberOfTailsArray)
      }).to.throw("The number of tails: " + greaterNumberOfTailsArray + ", exceeds the length of the array: " + basicNumbersArray.length)
    })

    const greaterThanEmptyTailsValue = 5
    it('should throw an error when the array is empty and the number of tails is non-zero', function () {
      expect(function(){
        index.listTail([], greaterThanEmptyTailsValue)
      }).to.throw("The number of tails: " + greaterThanEmptyTailsValue + ", exceeds the length of the array: " + 0)
    })

    const objLength = Object.keys(basicLettersAndNumbersObjectMap).length
    const greaterNumberOfTailsObject = objLength + 1
    it('should throw an error when the number of tails exceeds the number of keys in the object', function () {
      expect(function(){
        index.listTail(basicLettersAndNumbersObjectMap, greaterNumberOfTailsObject)
      }).to.throw("The number of tails: " + greaterNumberOfTailsObject + ", exceeds the number of keys in the object: " + objLength)
    })

    it('should throw an error when the object is empty and the number of tails is non-zero', function () {
      expect(function(){
        index.listTail({}, greaterNumberOfTailsObject)
      }).to.throw("The number of tails: " + greaterNumberOfTailsObject + ", exceeds the number of keys in the object: " + 0)
    })

    it('should throw an error when the number of tails is negative', function () {
      expect(function(){
        index.listTail({}, -1)
      }).to.throw("The number of tails: " + -1 + ", needs to be greater than 0")
    })

    //END: Error testing

    //BEGIN: Object testing

    it('should return an empty object when an empty object and 0 are given', function(){
      assert.deepEqual(
        index.listTail({}, 0),
        {}
      )
    })

    it('should return an object with the last two key/values when an object and 2 are given', function(){
      assert.deepEqual(
        index.listTail(basicLettersAndNumbersObjectMap, 2),
        {
          c : 3,
          d : 4
        }
      )
    })

    it('should return an empty object with an filled object and 0 for the number of tails', function(){
      assert.deepEqual(
        index.listTail(basicLettersAndNumbersObjectMap, 0),
        {}
      )
    })

    it('should return the same object if given the object length', function(){
      assert.deepEqual(
        index.listTail(basicLettersAndNumbersObjectMap, Object.keys(basicLettersAndNumbersObjectMap).length),
        basicLettersAndNumbersObjectMap
      )
    })


    //END: Object testing

  })
})

describe('createLists', function(){
  describe('#makeList', function(){

    // BEGIN NORMAL TESTING
    it('should return an empty list when n = 0 and a procedure is not specified', function(){
      assert.deepEqual(
        createLists.makeList(0),
        []
      )
    })

    it('should return an empty list when n = 0 and a blank procedure is specified', function(){
      assert.deepEqual(
        createLists.makeList(0, () => {}),
        []
      )
    })

    it('should return the first 5 even number when n = 5 and the procedure is a boolean function for testing if a number is even or not', function(){
      assert.deepEqual(
        createLists.makeList(5, (i) => { return i % 2 == 0 }),
        [0, 2, 4, 6, 8]
      )
    })

    it('should return a list (length 5) of the value of the indices squared when n = 5 and the procedure is a an int function returning the value squared', function(){
      assert.deepEqual(
        createLists.makeList(5, (i) => { return i * i }),
        [0, 1, 4, 9, 16]
      )
    })

    it('should return a list with 0 - 4 when n = 5 and the procedure is unspecified', function(){
      assert.deepEqual(
        createLists.makeList(5),
        [0, 1, 2, 3, 4]
      )
    })

    it('should return a list of 5 2\'s when n = 5 and the procedure takes no parameters and just returns 2', function(){
      assert.deepEqual(
        createLists.makeList(5, () => { return 2 }),
        [2, 2, 2, 2, 2]
      )
    })

    it('should return a list of 5 2\'s when n = 5 and the procedure takes one parameter and just returns 2', function(){
      assert.deepEqual(
        createLists.makeList(5, (i) => { return 2 }),
        [2, 2, 2, 2, 2]
      )
    })

    // END NORMAL TESTING

    // BEGIN ERROR TESTING

    const negNumberOfElements = -1
    it('Makes sure that an error is thrown when n < 0 and a procedure is not specified', function(){
      expect(function(){
        createLists.makeList(negNumberOfElements)
      }).to.throw('The number of elements to be made in the list: ' + negNumberOfElements + ', is not greater than or equal to zero.')
    })

    it('should throw an error when the return type of the procedure is not a number or boolean', function(){
      expect(function(){
        createLists.makeList(5, () => { return {1 : 'a', 2 : 'b'} })
      }).to.throw('The return type of the given procedure: object, is not a number or boolean')
    })

    it('should throw an error when n is not an integer', function(){
      expect(function(){
        createLists.makeList(5.5)
      }).to.throw('N must be of type integer, but was instead to be found of type: number')
    })

    // END ERROR TESTING
  })
})