let exportFunctions = {}

let listProperties = require('./listProperties.js')

// TODO: Add type checking for array and error if not
/**
 * Takes an array of items and lists and merges them all together into one single list
 * @param {Array} array - The array to be squashed 
 */
function flattenArray(array) {
    return [].concat(...array)
}

// TODO: Add indices to condition method
/**
 * Removes any items that are true for the given conditionMethod from the given list
 * @param {Array} list - List to potentially remove something from
 * @param {Function} conditionMethod - Method that returns true for items that are to be removed
 */
function removeIf(list, conditionMethod) {
    return list.filter((a) => {
        const result = conditionMethod(a)
        return !result
    })
}

// TODO: Add support for removing multiple items
/**
 * Removes every instance of the given item from the given list
 * @param {Array} list - List to potentially remove item(s) from
 * @param {*} item - The item to get rid of in the list
 */
function removeAllInstancesOf(list, item) {
    return list.filter((a) => {
        if (isNaN(item)) {
            return !isNaN(a)
        } else {
            return a !== item
        }
    })
}

/**
 * Replaces all instances of the given item with the given replaceWith in the given list
 * @param {Array} list - List to replace items in
 * @param {*} item - The item inside the list to be replaced
 * @param {*} replaceWith - The item to take the place of the other item
 */
function replaceAllInstancesOf(list, item, replaceWith) {
    return list.map(currEl => {
        if (currEl === item) {
            return replaceWith
        } else {
            return currEl
        }
    })
}

/**
 * Removes any instances of null or undefined in a list
 * @param {Array} list - This list to remove null and undefined from
 */
function cleanList(list) {
    return removeAllInstancesOf(removeAllInstancesOf(removeAllInstancesOf(list, null), undefined), NaN)
}

/**
 * Removes all duplicated items in the list. Preserves the first instance of each unique item.
 * @param {Array} list - The list to remove all duplicates from 
 */
function removeAllDuplicates(list) {
    let seenItems = new Set()
    return list.filter(currEl => {
        if (listProperties.count(list, currEl) > 1 && seenItems.has(currEl)) {
            return false
        } else {
            seenItems.add(currEl)
            return true
        }
    })
}

function shuffle(list) {
    let usedIndexes = new Set()
    let newList = []
    list.forEach(el => {
        let currRandInd = Math.floor(Math.random() * list.length)
        while (usedIndexes.has(currRandInd)) {
            currRandInd = Math.floor(Math.random() * list.length)
        }
        newList[currRandInd] = el
        usedIndexes.add(currRandInd)
    })

    return newList
}

exportFunctions.flattenArray = flattenArray
exportFunctions.removeIf = removeIf
exportFunctions.removeAllInstancesOf = removeAllInstancesOf
exportFunctions.replaceAllInstancesOf = replaceAllInstancesOf
exportFunctions.cleanList = cleanList
exportFunctions.removeAllDuplicates = removeAllDuplicates
// exportFunctions.shuffle = shuffle

module.exports = exportFunctions