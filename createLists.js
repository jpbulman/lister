let exportFunctions = {}

/**
 * Builds a list that is n items long with a given procedure. 
 * @param {Integer} n - The number of elements to be in the made list
 * @param {Function} method - The function to produce each item in the list, can take a parameter for the index and must return either a boolean or number
 */
function makeList(n, startingValue = 0, method = (i) => { return i }) {
    let arr = []
    // Wait until the array is of the specified, n, size
    for (let i = startingValue; arr.length < n; i++) {
        // Function must return either a boolean or a number
        const result = method(i)
        if (typeof (result) === 'boolean') {
            // Only add on to the array if the procedure is true for the current index
            if (result) {
                arr.push(i)
            }
        } else if (typeof (result) === 'number') {
            // If it is a number, just always push on to the array
            arr.push(method(i))
        }
    }

    return arr;
}

exportFunctions.makeList = makeList
module.exports = exportFunctions