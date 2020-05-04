const assert = require('assert')
const lister = require('../lister.js')

describe('#createLists', () => {
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
})