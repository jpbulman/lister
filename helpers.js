exportFunctions = {}

// Super basic, but just makes code chains/testing a lot nicer to read
function even(number) {
    return number % 2 === 0
}

// Can't just use modulo because of floats
function odd(number) {
    return !even(number) && Number.isInteger(number)
}

exportFunctions.even = even
exportFunctions.odd = odd
module.exports = exportFunctions