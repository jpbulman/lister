const assert = require('assert')
const lister = require('../lister.js')

describe('#helpers', () => {
    describe("#even", () => {
        it('should return true when given an even number', () => {
            assert(lister.even(2))
        })

        it('should return false when given an odd number', () => {
            assert(!lister.even(3))
        })

        it('should return false when given a float', () => {
            assert(!lister.even(Math.PI))
        })
    })

    describe("#odd", () => {
        it('should return true when given an odd number', () => {
            assert(lister.odd(3))
        })

        it('should return false when given an even number', () => {
            assert(!lister.odd(2))
        })

        it('should return false when given a float', () => {
            assert(!lister.odd(Math.PI))
        })
    })
})