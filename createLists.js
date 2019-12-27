let exportFunctions = {}

function makeList(n, method = (i) => {return i}){
    if(n < 0){
        throw 'The number of elements to be made in the list: ' + n + ', is not greater than or equal to zero.'
    }

    let arr = []
    for(let i = 0; arr.length < n; i++){
        const result = method(i)
        if(typeof(result) === 'boolean'){
            if(result){
                arr.push(i)
            }
        } else if(typeof(result) === 'number') {
            arr.push(method(i))
        } else {
            throw 'The return type of the given procedure: ' + typeof(result) + ', is not a number or boolean.'
        }
    }

    return arr;
}

exportFunctions.makeList = makeList
module.exports = exportFunctions