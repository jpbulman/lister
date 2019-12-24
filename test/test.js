var assert = require('assert');
var index = require('../index')

describe('index', function() {
  describe('#listTail()', function() {
    const basicNumbersList = [3, 1, 4, 1, 5, 9]
    
    it('should return the last two items in the list when list tails is 2', function() {
      assert.deepEqual(
        index.listTail(basicNumbersList, 2),
        [5, 9]
      )
    });

    it('should return an empty array if list tails is 0', function() {
      assert.deepEqual(
        index.listTail(basicNumbersList, 0),
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
        index.listTail(basicNumbersList, basicNumbersList.length),
        basicNumbersList
      )
    });

    it('should throw an error when the number of tails is not an integer', function () {
      assert.throws(
        index.listTail([], 1.5),
        Error,
        "The number of tails needs to be an integer"
      )
    });

  });
});