const assert = require('assert')
const lister = require('../lister.js')

describe('#modifyLists', () => {
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
                lister.makeList(3, 0, (a) => a % 2 !== 0)
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

        const twosAndFours = lister.makeList(6, 0, (i) => i < 3 ? 2 : 4)
        it('should remove the first three twos when given [2, 2, 2, 4, 4, 4] and 2', () => {
            assert.deepEqual(
                lister.removeAllInstancesOf(twosAndFours, 2),
                [4, 4, 4]
            )
        })

        it('should remove all instances of NaN when given a list with NaN', () => {
            assert.deepEqual(
                lister.removeAllInstancesOf([1, 2, NaN], NaN),
                [1, 2]
            )
        });
    })

    describe('#replaceAllInstancesOf', () => {
        it('should return an empty list when given an empty list and replacing one with two', () => {
            assert.deepEqual(
                lister.replaceAllInstancesOf([], 1, 2),
                []
            )
        })

        const negAndPosOnes = lister.makeList(4, 0, (i) => i < 2 ? -1 : 1)
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

    describe('#cleanList', () => {
        it('should return an empty list when given an empty list', () => {
            assert.deepEqual(
                lister.cleanList([]),
                []
            )
        })

        it('should return an empty list when given a list of null, undefined, and NaN', () => {
            assert.deepEqual(
                lister.cleanList([null, undefined, null, null, undefined, NaN]),
                []
            )
        })

        const mixedBag = [undefined, 1, null, 2, undefined, 3, NaN]
        it('should return a list of the number one to three when given the mixedBag', () => {
            assert.deepEqual(
                lister.cleanList(mixedBag),
                [1, 2, 3]
            )
        })

        it('should return then list itself when there are no faults', () => {
            assert.deepEqual(
                lister.cleanList([1, 2, 3, 4]),
                [1, 2, 3, 4]
            )
        });
    })

    describe('#removeAllDuplicates', () => {
        it('should return an empty list when given an empty list', () => {
            assert.deepEqual(
                lister.removeAllDuplicates([]), []
            )
        })

        const zeroToFour = lister.makeList(5)
        it('should return the same list when there are no repeated elements', () => {
            assert.deepEqual(
                lister.removeAllDuplicates(zeroToFour), zeroToFour
            )
        })

        it('should remove all but the first instance of one duplicated item', () => {
            assert.deepEqual(
                lister.removeAllDuplicates([1, 1, 2, 5, 6, 1]), [1, 2, 5, 6]
            )
        })

        it('should remove all but the first instance of multiple duplicated items', () => {
            assert.deepEqual(
                lister.removeAllDuplicates([1, 6, 6, 1, 3, 5, 3, 6]), [1, 6, 3, 5]
            )
        })
    })

    // describe('#shuffle', () => {
    //     it('should return an empty array when given an empty array', () => {
    //         assert.deepEqual(lister.shuffle([]), [])
    //     })
    // })
})