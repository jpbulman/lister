let exportFunctions = {}

/**
 * Get the last <i>numberOfTails</i> elements in a list.
 * e.g. listTail([1, 3, 4, 1, 5], 2) = [1, 5]
 * listTail({"a" : 1, "b": 2, "c" : 3}, 2) = {"b": 2, "c" : 3}
 * @param {Array | Object} list - The list to get the end of.
 * @param {Integer} numberOfTails - The number of elements, starting from the end, to retrieve.
 * @return {Array | Object} - The value of the property.
*/
function listTail(list, numberOfTails = 1) {
    return list.slice(list.length - numberOfTails)
    // } else if (typeof (list) === "object") {
    //     const objLength = Object.keys(list).length
    //     if (numberOfTails > objLength) {
    //         throw "The number of tails: " + numberOfTails + ", exceeds the number of keys in the object: " + objLength
    //     } else {
    //         let tailObject = {}
    //         const keys = Object.keys(list)
    //         for (let i = keys.length - numberOfTails; i < keys.length; i++) {
    //             tailObject[keys[i]] = list[keys[i]]
    //         }

    //         return tailObject
    //     }
    // }
}

/**
 * Counts the number of times the given item occurs in the given list
 * @param {Array} list - The list to check the number of occurences in 
 * @param {*} item - The item to be checked for the number of occurences
 */
function count(list, item) {
    return list.filter((a) => { return a === item }).length
}

//In construction
function foldl(method, ...params) {
    const typeOfParams = typeof (params[0])
    if (Array.isArray(params[0])) {
        let accumulator = params[0][0]
        params.forEach((currentArray, currentArrayIndex) => {
            currentArray.forEach((currentItem, currentItemIndex) => {
                if (currentArrayIndex !== 0 || currentItemIndex !== 0) {
                    console.log(method(accumulator, currentItem), accumulator, currentItem)
                    accumulator = method(accumulator, currentItem)
                }
            })
        })

        return accumulator
    }
}

// function countWithReduce(list, item){
//     return list.reduce((acc, currentItem) => { console.log(currentItem); return currentItem === item ? acc  + 1 : acc })
// }

/**
 * Returns if the list contains all of the items in the given array
 * @param {Array} list 
 * @param  {...any} items 
 */
function includesAnd(list, ...items) {
    return items.every((a) => { return list.includes(a) })
}

/**
 * Returns if the list contains at least one of the items in the given array
 * @param {Array} list 
 * @param  {...any} items 
 */
function includesOr(list, ...items) {
    return items.some((a) => { return list.includes(a) })
}

/**
 * Returns a if the array's contents are equal
 * @param {...Array} arrays 
 */
function arraysAreEqual(...arrays) {
    for (curr of arrays) {
        // Just compare each array to the first one
        curr.forEach((e, idx) => {
            if (e !== arrays[0][idx]) {
                return false
            }
        })
        if (curr.length !== arrays[0].length)
            return false
    }
    return true
}

/**
 * Returns the value of the last element in the array without removing like .pop() would
 * @param {Array} array 
 */
function peek(array) {
    return array[array.length - 1]
}

exportFunctions.listTail = listTail
exportFunctions.count = count
exportFunctions.includesAnd = includesAnd
exportFunctions.includesOr = includesOr
exportFunctions.arraysAreEqual = arraysAreEqual
exportFunctions.peek = peek

module.exports = exportFunctions