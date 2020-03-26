var assert = require('assert')
var expect = require('chai').expect
const lister = require('lister')

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

    //BEGIN: Error testing

    const nonIntegerNumberOfTails = 1.5
    it('should throw an error when the number of tails is not an integer', function () {
      expect(() => {
        lister.listTail([], nonIntegerNumberOfTails)
      }).to.throw("The number of tails: " + nonIntegerNumberOfTails + ", needs to be an integer")
    })

    const greaterNumberOfTailsArray = basicNumbersArray.length + 1
    it('should throw an error when the number of tails exceeds the length of the array', function () {
      expect(() => {
        lister.listTail(basicNumbersArray, greaterNumberOfTailsArray)
      }).to.throw("The number of tails: " + greaterNumberOfTailsArray + ", exceeds the length of the array: " + basicNumbersArray.length)
    })

    const greaterThanEmptyTailsValue = 5
    it('should throw an error when the array is empty and the number of tails is non-zero', function () {
      expect(() => {
        lister.listTail([], greaterThanEmptyTailsValue)
      }).to.throw("The number of tails: " + greaterThanEmptyTailsValue + ", exceeds the length of the array: " + 0)
    })

    const objLength = Object.keys(basicLettersAndNumbersObjectMap).length
    const greaterNumberOfTailsObject = objLength + 1
    it('should throw an error when the number of tails exceeds the number of keys in the object', function () {
      expect(() => {
        lister.listTail(basicLettersAndNumbersObjectMap, greaterNumberOfTailsObject)
      }).to.throw("The number of tails: " + greaterNumberOfTailsObject + ", exceeds the number of keys in the object: " + objLength)
    })

    it('should throw an error when the object is empty and the number of tails is non-zero', function () {
      expect(() => {
        lister.listTail({}, greaterNumberOfTailsObject)
      }).to.throw("The number of tails: " + greaterNumberOfTailsObject + ", exceeds the number of keys in the object: " + 0)
    })

    it('should throw an error when the number of tails is negative', function () {
      expect(() => {
        lister.listTail({}, -1)
      }).to.throw("The number of tails: " + -1 + ", needs to be greater than 0")
    })

    //END: Error testing

    //BEGIN: Object testing

    it('should return an empty object when an empty object and 0 are given', () => {
      assert.deepEqual(
        lister.listTail({}, 0),
        {}
      )
    })

    it('should return an object with the last two key/values when an object and 2 are given', () => {
      assert.deepEqual(
        lister.listTail(basicLettersAndNumbersObjectMap, 2),
        {
          c: 3,
          d: 4
        }
      )
    })

    it('should return an empty object with an filled object and 0 for the number of tails', () => {
      assert.deepEqual(
        lister.listTail(basicLettersAndNumbersObjectMap, 0),
        {}
      )
    })

    it('should return the same object if given the object length', () => {
      assert.deepEqual(
        lister.listTail(basicLettersAndNumbersObjectMap, Object.keys(basicLettersAndNumbersObjectMap).length),
        basicLettersAndNumbersObjectMap
      )
    })


    //END: Object testing

  })
})

describe('lister', () => {
  describe('#makeList', () => {

    // BEGIN NORMAL TESTING
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

    it('should return the first 5 even number when n = 5 and the procedure is a boolean function for testing if a number is even or not', () => {
      assert.deepEqual(
        lister.makeList(5, (i) => { return i % 2 == 0 }),
        [0, 2, 4, 6, 8]
      )
    })

    it('should return a list (length 5) of the value of the indices squared when n = 5 and the procedure is a an int function returning the value squared', () => {
      assert.deepEqual(
        lister.makeList(5, (i) => { return i * i }),
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
        lister.makeList(5, () => { return 2 }),
        [2, 2, 2, 2, 2]
      )
    })

    it('should return a list of 5 2\'s when n = 5 and the procedure takes one parameter and just returns 2', () => {
      assert.deepEqual(
        lister.makeList(5, (i) => { return 2 }),
        [2, 2, 2, 2, 2]
      )
    })

    // it('should return an object with each lister mapped to the lister cubed', () =>{
    //   assert.deepEqual(
    //     lister.makeList(5, (i) => { return })
    //   )
    // })

    // END NORMAL TESTING

    // BEGIN ERROR TESTING

    const negNumberOfElements = -1
    it('Makes sure that an error is thrown when n < 0 and a procedure is not specified', () => {
      expect(() => {
        lister.makeList(negNumberOfElements)
      }).to.throw('The number of elements to be made in the list: ' + negNumberOfElements + ', is not greater than or equal to zero.')
    })

    it('should throw an error when the return type of the procedure is not a number or boolean', () => {
      expect(() => {
        lister.makeList(5, () => { return { 1: 'a', 2: 'b' } })
      }).to.throw('The return type of the given procedure: object, is not a number or boolean')
    })

    it('should throw an error when n is not an integer', () => {
      expect(() => {
        lister.makeList(5.5)
      }).to.throw('N must be of type integer, but was instead to be found of type: number')
    })

    // END ERROR TESTING
  })

  describe('#flattenArray', () => {
    it('should return an empty array when passed in an empty array', () => {
      assert.deepEqual(
        lister.flattenArray([]),
        []
      )
    })

    it('should return an empty array when passed in an array of empty arrays', () => {
      assert.deepEqual(
        lister.flattenArray([[], [], [], []]),
        []
      )
    })

    it('should return the same array when given a list of 1-4', () => {
      assert.deepEqual(
        lister.flattenArray(lister.makeList(5)), lister.makeList(5)
      )
    })

    const subArrayOne = [8, 6, 7]
    const subArrayTwo = [5, 3, 0]
    const subArrayThree = [9]
    const subArrayFour = []
    const arrayWithSubs = [subArrayOne, subArrayTwo, subArrayThree, subArrayFour]
    const flattened = subArrayOne.concat(subArrayTwo, subArrayThree, subArrayFour)
    it('should take the contents of the three individual arrays and merge them into one', () => {
      assert.deepEqual(
        lister.flattenArray(arrayWithSubs),
        flattened
      )
    })
  })

  describe('#removeIf', () => {
    const oneTwoThree = [1, 2, 3]
    it('should remove nothing from the list if the condition function is blank', () => {
      assert.deepEqual(
        lister.removeIf(oneTwoThree, () => { }),
        oneTwoThree
      )
    })

    it('should return an empty list if given an empty list and a non blank function', () => {
      assert.deepEqual(
        lister.removeIf([], (a) => { return a === 1 }),
        []
      )
    })

    it('should return a list of the odd numbers from 0-5 when given a list of 0-5 and a condition method that checks for being even', () => {
      assert.deepEqual(
        //                    0-5
        lister.removeIf(lister.makeList(6), (a) => { return a % 2 === 0 }),
        //1, 3, 5
        lister.makeList(3, (a) => a % 2 !== 0)
      )
    })

    it('should remove all elements if given a non empty list and a return true condition method', () => {
      assert.deepEqual(
        lister.removeIf(oneTwoThree, () => true),
        []
      )
    })
  })

  describe('#removeAllInstancesOf', () => {
    it('should return an empty list when given an empty list and a number', () => {
      assert.deepEqual(
        lister.removeAllInstancesOf([], 3),
        []
      )
    })

    it('should return an empty list when given an empty list and undefined', () => {
      assert.deepEqual(
        lister.removeAllInstancesOf([], undefined),
        []
      )
    })

    const zeroToFour = lister.makeList(5)
    it('should return the same list when given an item not in the list', () => {
      assert.deepEqual(
        lister.removeAllInstancesOf(zeroToFour, 5),
        zeroToFour
      )
    })

    it('should return an empty list when given a list of 2\'s and 2 as the item to be removed', () => {
      assert.deepEqual(
        lister.removeAllInstancesOf([2, 2, 2], 2),
        []
      )
    })

    const twosAndFours = lister.makeList(6, (i) => i < 3 ? 2 : 4)
    it('should remove the first three twos when given [2, 2, 2, 4, 4, 4] and 2', () => {
      assert.deepEqual(
        lister.removeAllInstancesOf(twosAndFours, 2),
        [4, 4, 4]
      )
    })
  })

  describe('#replaceAllInstancesOf', () => {
    it('should return an empty list when given an empty list and replacing one with two', () => {
      assert.deepEqual(
        lister.replaceAllInstancesOf([], 1, 2),
        []
      )
    })

    const negAndPosOnes = lister.makeList(4, (i) => i < 2 ? -1 : 1)
    it('should return a list of all ones when given [-1, -1, 1, 1] and replacing -1 with 1', () => {
      assert.deepEqual(
        lister.replaceAllInstancesOf(negAndPosOnes, -1, 1),
        [1, 1, 1, 1]
      )
    })

    const zeroToFour = lister.makeList(5)
    it('should return the same list when trying to replace something that is not in the list', () => {
      assert.deepEqual(
        lister.replaceAllInstancesOf(zeroToFour, 5, 6),
        zeroToFour
      )
    })
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

    const oneToThreeAndTwo = lister.makeList(4, (i) => i < 3 ? i : 2)
    it('should return two when given [1, 2, 3, 2] and is looking for two', () => {
      assert.equal(
        lister.count(oneToThreeAndTwo, 2),
        2
      )
    })

    const fives = lister.makeList(5, () => 5)
    it('should return the length of the list when given a list of only the element it is looking for', () => {
      assert.equal(
        lister.count(fives, 5),
        fives.length
      )
    })
  })

  describe('#cleanList', () => {
    it('should return an empty list when given an empty list', () => {
      assert.deepEqual(
        lister.cleanList([]),
        []
      )
    })

    it('should return an empty list when given a list of only null and undefined', () => {
      assert.deepEqual(
        lister.cleanList([null, undefined, null, null, undefined]),
        []
      )
    })

    const mixedBag = [undefined, 1, null, 2, undefined, 3]
    it('should return a list of the number one to three when given the mixedBag', () => {
      assert.deepEqual(
        lister.cleanList(mixedBag),
        [1, 2, 3]
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

  // describe('#removeAllDuplicates', () => {
  //   it('should return an empty list when given an empty list', () => {
  //     assert.deepEqual(
  //       lister.removeAllDuplicates([]), []
  //     )
  //   })

  //   const zeroToFour = lister.makeList(5)
  //   it('should return the same list when there are no repeated elements', () => {
  //     assert.deepEqual(
  //       lister.removeAllDuplicates(zeroToFour), zeroToFour
  //     )
  //   })
  // })
})