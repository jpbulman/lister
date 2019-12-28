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

exportFunctions.makeList = makeList
module.exports = exportFunctions