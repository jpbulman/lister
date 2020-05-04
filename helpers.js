exportFunctions = {}

// Super basic, but just makes code chains/testing a lot nicer to read
function even(number) {
    return number % 2 === 0
}

// Can't just use modulo because of floats
function odd(number) {
    return !even(number) && Number.isInteger(number)
}

// Source: 
// https://medium.com/@sarahdherr/prime-number-algorithm-in-js-f9fb2439c7ae
function prime(num) {
    if (num <= 1) {
        return true
    } else if (num <= 3) {
        return true
    } else if (num % 2 === 0 || num % 3 === 0) {
        return false
    }

    let i = 5
    while (i * i <= num) {
        if (num % i === 0 || num % (i + 2) === 0) {
            return false
        }
        i += 6
    }
    return true
}

exportFunctions.even = even
exportFunctions.odd = odd
exportFunctions.prime = prime
module.exports = exportFunctions