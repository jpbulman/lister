const assert = require('assert')
// var expect = require('chai').expect
const lister = require('../lister.js')

describe('lister', () => {
  describe('#listTail()', () => {
    const basicNumbersArray = [3, 1, 4, 1, 5, 9]
    const basicLettersAndNumbersObjectMap = {
      a: 1,
      b: 2,
      c: 3,
      d: 4
    }

    //BEGIN: Array testing

    it('should return the last two items in the list when list tails is 2', () => {
      assert.deepEqual(
        lister.listTail(basicNumbersArray, 2),
        [5, 9]
      )
    })

    it('should return an empty array if list tails is 0', () => {
      assert.deepEqual(
        lister.listTail(basicNumbersArray, 0),
        []
      )
    })

    it('should return an empty array if the given list is empty and list tails is 0', () => {
      assert.deepEqual(
        lister.listTail([], 0),
        []
      )
    })

    it('should return the same list when given the length of the list', () => {
      assert.deepEqual(
        lister.listTail(basicNumbersArray, basicNumbersArray.length),
        basicNumbersArray
      )
    })

    //END: Array testing

    // //BEGIN: Object testing

    // it('should return an empty object when an empty object and 0 are given', () => {
    //   assert.deepEqual(
    //     lister.listTail({}, 0),
    //     {}
    //   )
    // })

    // it('should return an object with the last two key/values when an object and 2 are given', () => {
    //   assert.deepEqual(
    //     lister.listTail(basicLettersAndNumbersObjectMap, 2),
    //     {
    //       c: 3,
    //       d: 4
    //     }
    //   )
    // })

    // it('should return an empty object with an filled object and 0 for the number of tails', () => {
    //   assert.deepEqual(
    //     lister.listTail(basicLettersAndNumbersObjectMap, 0),
    //     {}
    //   )
    // })

    // it('should return the same object if given the object length', () => {
    //   assert.deepEqual(
    //     lister.listTail(basicLettersAndNumbersObjectMap, Object.keys(basicLettersAndNumbersObjectMap).length),
    //     basicLettersAndNumbersObjectMap
    //   )
    // })


    // //END: Object testing

  })
})

describe('lister', () => {
  describe('#makeList', () => {
    it('should return an empty list when n = 0 and a procedure is not specified', () => {
      assert.deepEqual(
        lister.makeList(0),
        []
      )
    })

    it('should return an empty list when n = 0 and a blank procedure is specified', () => {
      assert.deepEqual(
        lister.makeList(0, () => { }),
        []
      )
    })

    it('should return the first 5 even numbers when n = 5 and the procedure is a boolean function for testing if a number is even or not', () => {
      assert.deepEqual(
        lister.makeList(5, 0, (i) => { return i % 2 == 0 }),
        [0, 2, 4, 6, 8]
      )
    })

    it('should return a list (length 5) of the value of the indices squared when n = 5 and the procedure is a an int function returning the value squared', () => {
      assert.deepEqual(
        lister.makeList(5, 0, (i) => { return i * i }),
        [0, 1, 4, 9, 16]
      )
    })

    it('should return a list with 0 - 4 when n = 5 and the procedure is unspecified', () => {
      assert.deepEqual(
        lister.makeList(5),
        [0, 1, 2, 3, 4]
      )
    })

    it('should return a list of 5 2\'s when n = 5 and the procedure takes no parameters and just returns 2', () => {
      assert.deepEqual(
        lister.makeList(5, 0, () => { return 2 }),
        [2, 2, 2, 2, 2]
      )
    })

    it('should return a list of 5 2\'s when n = 5 and the procedure takes one parameter and just returns 2', () => {
      assert.deepEqual(
        lister.makeList(5, 0, (i) => { return 2 }),
        [2, 2, 2, 2, 2]
      )
    })

    // it('should return the numbers 1-5 when given a starting postion of 1, no procedure, and length 5', () => {
    //   assert.deepEqual(
    //     lister.makeList(5, 1),
    //     [1, 2, 3, 4, 5]
    //   )
    // })

    // it('should return an object with each lister mapped to the lister cubed', () =>{
    //   assert.deepEqual(
    //     lister.makeList(5, (i) => { return })
    //   )
    // })
  })

  describe('#count', () => {
    it('should return zero when given an empty list and a number', () => {
      assert.equal(
        lister.count([], 1),
        0
      )
    })

    it('should return zero when given something that is not in the list', () => {
      assert.equal(
        lister.count([1, 2, 3], 4),
        0
      )
    })

    const oneToThreeAndTwo = lister.makeList(4, 0, (i) => i < 3 ? i : 2)
    it('should return two when given [1, 2, 3, 2] and is looking for two', () => {
      assert.equal(
        lister.count(oneToThreeAndTwo, 2),
        2
      )
    })

    const fives = lister.makeList(5, 0, () => 5)
    it('should return the length of the list when given a list of only the element it is looking for', () => {
      assert.equal(
        lister.count(fives, 5),
        fives.length
      )
    })
  })

  // TODO: Add more test with different types of elements at the end
  describe('#includesAnd', () => {
    it('should return false when given an empty list and three elements', () => {
      assert(
        !lister.includesAnd([], 1, 2, 3),
      )
    })

    const zeroToFour = lister.makeList(5)
    it('should return true when given the number 1-3 and the list 0-4', () => {
      assert(
        lister.includesAnd(zeroToFour, 1, 2, 3),
      )
    })

    const zeroToNine = lister.makeList(10)
    it('should return true when given the list and checks for the items of list itself', () => {
      assert(
        lister.includesAnd(zeroToNine, ...zeroToNine),
      )
    })

    it('should return false when it is looking for a list that is a superset', () => {
      assert(
        !lister.includesAnd([1, 2, 3], zeroToNine)
      )
    })
  })

  // TODO: Add more test with different types
  describe('#includesOr', () => {
    it('should return false when given an empty list and several elements', () => {
      assert(
        !lister.includesOr([], 1, 2, 3)
      )
    })

    const zeroToTen = lister.makeList(11)
    it('should return true when given a list and it is looking for its contents', () => {
      assert(
        lister.includesOr(zeroToTen, ...zeroToTen)
      )
    })

    it('should return true when the list is a subset of the contents being looked for', () => {
      assert(
        lister.includesOr(lister.makeList(4), ...zeroToTen)
      )
    })

    it('should return true when the list is a superset of the contents being looked for', () => {
      assert(
        lister.includesOr(zeroToTen, ...lister.makeList(4))
      )
    })
  })

  describe('#arraysAreEqual', () => {
    it('should return true when given two empty arrays', () => {
      assert(
        lister.arraysAreEqual([], [])
      )
    })

    it('should return false when given an empty array and a non-empty array', () => {
      assert(
        !lister.arraysAreEqual([], lister.makeList(4))
      )
    })

    it('should return false when given two different non-empty arrays', () => {
      assert(
        !lister.arraysAreEqual(lister.makeList(1), lister.makeList(9))
      )
    })

    it('should return true when given two identical lists', () => {
      assert(
        lister.arraysAreEqual(lister.makeList(4), lister.makeList(4))
      )
    })

    it('should return true when given three empty arrays', () => {
      assert(
        lister.arraysAreEqual([], [], [])
      )
    })

    it('should return true when given three of the same non empty arrays', () => {
      assert(
        lister.arraysAreEqual(lister.makeList(4), lister.makeList(4), lister.makeList(4))
      )
    })

    it('should return false when give two arrays that are the same and one that is different', () => {
      assert(
        !lister.arraysAreEqual(lister.makeList(5), lister.makeList(4), lister.makeList(5))
      )
    })
  })

  describe('#peek', () => {
    it('should return the last item in the list when given a non empty array', () => {
      assert.equal(
        lister.peek(lister.makeList(2)), 1
      )
    })

    it('should return undefined when given an empty list', () => {
      assert.equal(
        lister.peek([]), undefined
      )
    })
  })
})