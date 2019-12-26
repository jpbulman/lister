let exportFunctions = {}

function makeList(n, method = (i) => {return i}){
    let arr = []
    for(let i = 0; arr.length < n; i++){
        const result = method(i)
        if(typeof(result) === 'boolean'){
            if(result){
                arr.push(i)
            }
        } else {
            arr.push(method(i))
        }
    }

    return arr;
}

console.log(makeList(5, (i) => { return i % 2 == 0 })) //[0, 2, 4, 6, 8] 
console.log(makeList(5, (i) => { return i * i})) //[0, 1, 4, 9, 16] 
console.log(makeList(5, (i) => { return i})) //[0, 1, 2, 3, 4] 
console.log(makeList(5)) //[0, 1, 2, 3, 4] 

module.exports = exportFunctions