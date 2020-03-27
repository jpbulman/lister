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
    //Makes sure the numberOfTails is an int
    if (!Number.isInteger(numberOfTails)) {
        throw new Error("The number of tails: " + numberOfTails + ", needs to be an integer")
    } else if (numberOfTails < 0) {
        throw new Error("The number of tails: " + numberOfTails + ", needs to be greater than 0")
    } else if (Array.isArray(list)) {
        if (numberOfTails > list.length) {
            throw "The number of tails: " + numberOfTails + ", exceeds the length of the array: " + list.length
        } else {
            return list.slice(list.length - numberOfTails)
        }
    } else if (typeof (list) === "object") {
        const objLength = Object.keys(list).length
        if (numberOfTails > objLength) {
            throw "The number of tails: " + numberOfTails + ", exceeds the number of keys in the object: " + objLength
        } else {
            let tailObject = {}
            const keys = Object.keys(list)
            for (let i = keys.length - numberOfTails; i < keys.length; i++) {
                tailObject[keys[i]] = list[keys[i]]
            }

            return tailObject
        }
    }
}

exportFunctions.listTail = listTail

module.exports = exportFunctions