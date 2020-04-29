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
 * Returns true if the array's contents are equal
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

/**
 * Returns the sum of all of the elements of the list
 * @param {Array} list - The list to find the sum of
 */
function sum(list) {
    return list.reduce((a, b) => a + b, 0)
}

/**
 * Finds the average of a list of numbers
 * @param {Array} list - The list to find the average of
 */
function mean(list) {
    return sum(list) / list.length
}

/**
 * Returns the median of a list of numbers
 * @param {Array} list - The list to find the median of 
 */
function median(list) {
    list.sort((a, b) => a - b)
    return list.length % 2 === 0 ? (list[Math.floor(list.length / 2) - 1] + list[Math.floor(list.length / 2)]) / 2 : list[Math.floor(list.length / 2)]
}

/**
 * Returns the mode (the number that appears most in the list).
 * @param {Arrray} list - The list to find the mode of
 */
function mode(list) {
    let count = {}
    for (i of list) {
        if (i in count) {
            count[i] += 1
        } else {
            count[i] = 1
        }
    }

    let maxItems = [Object.keys(count)[0]]
    for (key in count) {
        if (count[key] > count[maxItems]) {
            maxItems = [key]
        } else if (count[key] > count[maxItems]) {
            maxItems.push(key)
        }
    }

    return maxItems
}

/**
 * Returns a list of indices of elements that satisfy a boolean function
 * @param {Array} list - List to find the indices that satisfy the conditional
 * @param {Function} boolFunc - Function that must return a boolean saying if the given element of the list satisfys the condition
 */
function indicesWhere(list, boolFunc) {
    let indList = []
    list.forEach((el, idx) => {
        if (boolFunc(el)) {
            indList.push(idx)
        }
    })

    return indList
}

exportFunctions.listTail = listTail
exportFunctions.count = count
exportFunctions.includesAnd = includesAnd
exportFunctions.includesOr = includesOr
exportFunctions.arraysAreEqual = arraysAreEqual
exportFunctions.peek = peek
exportFunctions.sum = sum
exportFunctions.mean = mean
exportFunctions.median = median
exportFunctions.mode = mode
exportFunctions.indicesWhere = indicesWhere

module.exports = exportFunctions