let exportFunctions = {}

/**
 * Builds a list that is n items long with a given procedure. 
 * @param {Integer} n - The number of elements to be in the made list
 * @param {Function} method - The function to produce each item in the list, can take a parameter for the index and must return either a boolean or number
 */
function makeList(n, method = (i) => {return i}){
    // The list cannot have less than zero elements in it
    if(n < 0){
        throw 'The number of elements to be made in the list: ' + n + ', is not greater than or equal to zero.'
    } else if(!Number.isInteger(n)){
        throw 'N must be of type integer, but was instead to be found of type: ' + typeof(n)
    }

    let arr = []
    // Wait until the array is of the specified, n, size
    for(let i = 0; arr.length < n; i++){
        // Function must return either a boolean or a number
        const result = method(i)
        if(typeof(result) === 'boolean'){
            // Only add on to the array if the procedure is true for the current index
            if(result){
                arr.push(i)
            }
        } else if(typeof(result) === 'number') {
            // If it is a number, just always push on to the array
            arr.push(method(i))
        } else {
            // If the method does not return a number or a boolean, throw an error
            throw 'The return type of the given procedure: ' + typeof(result) + ', is not a number or boolean.'
        }
    }

    return arr;
}

//In construction
function foldl(method, ...params){
    const typeOfParams = typeof(params[0])
    if(Array.isArray(params[0])){
        let accumulator = params[0][0]
        params.forEach((currentArray, currentArrayIndex) => {
            currentArray.forEach((currentItem, currentItemIndex) => {
                if(currentArrayIndex !== 0 || currentItemIndex !== 0){
                    console.log(method(accumulator, currentItem), accumulator, currentItem)
                    accumulator = method(accumulator, currentItem)
                }
            })
        })

        return accumulator
    }
}

// TODO: Add type checking for array and error if not
/**
 * Takes an array of items and lists and merges them all together into one single list
 * @param {Array} array - The array to be squashed 
 */
function flattenArray(array){
    return [].concat(...array)
}

// TODO: Add indices to condition method
/**
 * Removes any items that are true fot the given conditionMethod from the given list
 * @param {Array} list - List to potentially remove something from
 * @param {Function} conditionMethod - Method that returns true for items that are to be removed
 */
function removeIf(list, conditionMethod){
    return list.filter((a) => {
        const result = conditionMethod(a)
        return !result
    })
}

/**
 * Removes every instance of the given item from the given list
 * @param {Array} list - List to potentially remove item(s) from
 * @param {*} item - The item to get rid of in the list
 */
function removeAllInstancesOf(list, item){
    return list.filter((a) => {
        return a !== item
    })
}

/**
 * Replaces all instances of the given item with the given replaceWith in the given list
 * @param {Array} list - List to replace items in
 * @param {*} item - The item inside the list to be replaced
 * @param {*} replaceWith - The item to take the place of the other item
 */
function replaceAllInstancesOf(list, item, replaceWith){
    let indOf = list.indexOf(item)
    while(indOf !== -1){
        list[indOf] = replaceWith
        indOf = list.indexOf(item)
    }

    return list
}

/**
 * Counts the number of times the given item occurs in the given list
 * @param {Array} list - The list to check the number of occurences in 
 * @param {*} item - The item to be checked for the number of occurences
 */
function count(list, item){
    return list.filter((a) => { return a === item }).length
}

// function countWithReduce(list, item){
//     return list.reduce((acc, currentItem) => { console.log(currentItem); return currentItem === item ? acc  + 1 : acc })
// }

/**
 * Removes any instances of null or undefined in a list
 * @param {Array} list - This list to remove null and undefined from
 */
function cleanList(list){
    return removeAllInstancesOf(removeAllInstancesOf(list, null), undefined)
}

/**
 * Returns if the list contains all of the items
 * @param {Array} list 
 * @param  {...any} items 
 */
function includesAnd(list, ...items){
    return items.every((a) => { return list.includes(a) })
}

/**
 * Returns if the list contains at least one of the items
 * @param {Array} list 
 * @param  {...any} items 
 */
function includesOr(list, ...items){
    return items.some((a) => { return list.includes(a) })
}

/**
 * Returns a if the arrays' contents are equal
 * @param {Array} arrOne 
 * @param {Array} arrTwo 
 */
function arraysAreEqual(arrOne, arrTwo){
    return arrOne.length === arrTwo.length && arrOne.filter((currentValue, idx) => currentValue !== arrTwo[idx]).length === 0
}

console.log(arraysAreEqual([1, 2, 4], [1, 2, 4]))

exportFunctions.makeList = makeList
exportFunctions.flattenArray = flattenArray
exportFunctions.removeIf = removeIf
exportFunctions.removeAllInstancesOf = removeAllInstancesOf
exportFunctions.replaceAllInstancesOf = replaceAllInstancesOf
exportFunctions.count = count
exportFunctions.cleanList = cleanList
exportFunctions.includesAnd = includesAnd
exportFunctions.includesOr = includesOr
exportFunctions.arraysAreEqual = arraysAreEqual
module.exports = exportFunctions