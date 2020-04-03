const assert = require('assert')
const lister = require('../lister.js')

describe('#listProperties', () => {
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