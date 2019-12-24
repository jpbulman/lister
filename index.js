let exportFunctions = {}

function listTail(list, numberOfTails){
    if(! Number.isInteger(numberOfTails) ){
        throw new Error("The number of tails needs to be an integer")
    } else if(Array.isArray(list)){
        if(numberOfTails > list.length){
            throw "The number of tails: " + numberOfTails + ", exceeds the length of the array: " + list.length
        } else {
            return list.slice(list.length - numberOfTails)
        }
    } else if(typeof(list) === "object"){
        const objLength = Object.keys(list).length
        if(numberOfTails > objLength){
            throw "The number of tails: " + numberOfTails + ", exceeds the number of keys in the object: " + objLength
        } else {
            let tailObject = {}
            const reversedKeys = Object.keys(list).reverse()
            for(let i = 0; i < numberOfTails; i++){
                tailObject[reversedKeys] = list[reversedKeys]
            }
            return tailObject
        }
    }
}

exportFunctions.listTail = listTail

module.exports = exportFunctions