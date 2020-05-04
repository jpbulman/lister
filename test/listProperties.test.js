const assert = require('assert')
const lister = require('../lister.js')

describe('#listProperties', () => {
    describe('#listTail()', () => {
        const basicNumbersArray = [3, 1, 4, 1, 5, 9]

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

    describe('#mean', () => {
        it('should return NaN when given an empty list', () => {
            assert(isNaN(lister.mean([])))
        })

        it('should return the number itself when given an array of length one', () => {
            assert.equal(lister.mean([1]), 1)
        })

        it('should return the value when given an array of the same number', () => {
            assert.equal(lister.mean([1, 1, 1]), 1)
        })

        it('should return the sum of the numbers divided by the length of the list when given a non-empty array', () => {
            assert.equal(lister.mean([-1, 0, 1, 2]), .5)
        });
    })

    describe('#median', () => {
        it('should return NaN when given an empty list', () => {
            assert(isNaN(lister.median([])))
        })

        it('should return the first number when given a list of length one', () => {
            assert.equal(lister.median([5]), 5)
        })

        it('should return the average of the first two numbers when given a list of length two', () => {
            assert.equal(lister.median([-1, 1]), 0)
        })

        it('should return the middle element of the list, if sorted, when given an unsorted list of odd length', () => {
            assert.equal(lister.median([4, 4, 2, 0, 5, -1, 7]), 4)
        })

        it('should return the average of the middle two elements when givena a list of even length', () => {
            assert.equal(lister.median([0, 6, -1, 4, 10, 3, 2, 4]), 3.5)
        })
    })

    describe('#mode', () => {
        it('should return NaN when given an empty list', () => {
            assert(isNaN(lister.median([])))
        })

        it('should return the first item in the list when given a list of length one', () => {
            assert.equal(lister.median([0]), 0)
        })

        it('should return the average of the two numbers when given a list of two numbers', () => {
            assert.equal(lister.median([5, 6]), 5.5)
        })

        it('should return the middle number of the list (when sorted) when given an unsorted list of odd length', () => {
            assert.equal(lister.median([4, -1, 3, 1, 0, -7, 9]), 1)
        })

        it('should return the average of the two middle numbers of the list (when sorted) when given an unsorted list of even length', () => {
            assert.equal(lister.median([4, -1, 3, 1, 0, -7, 9, -1]), 0.5)
        })
    })

    describe('#sum', () => {
        it('should return 0 when given an empty array', () => {
            assert.equal(lister.sum([]), 0)
        })

        it('should return the only number in the list when given an array of length one', () => {
            assert.equal(lister.sum([-8]), -8)
        })

        it('should return all of the numbers added up together when given a list of numbers of length n', () => {
            assert.equal(lister.sum([-1, 0, 2, 8, -5, -4]), 0)
        })
    })

    describe('#indicesWhere', () => {
        it('should return an empty list when given an empty list and empty function', () => {
            assert.deepEqual(lister.indicesWhere([], () => { }), [])
        })

        it('should return an empty list when given an empty list and a non empty function', () => {
            assert.deepEqual(lister.indicesWhere([], (element) => element % 2 === 0), [])
        })

        it('should return an array of the indicies of all even numbers when given a non empty list and a function that checks for even numbers', () => {
            assert.deepEqual(
                lister.indicesWhere([1, 2, 4, 0, 9, 10, 3, 5, 6], (el) => el % 2 === 0),
                [1, 2, 3, 5, 8]
            )
        })

        it('should return an empty list when given a list full of odd numbers and a function looking for even numbers', () => {
            assert.deepEqual(
                lister.indicesWhere([7, 5, 3, 9, 1, 1, 3, 5], (el) => el % 2 === 0),
                []
            )
        })
    })
})