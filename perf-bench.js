import RandomGen from "./index.js"
import crypto from "crypto"

function getStandardDeviation(array) {
    const n = array.length
    const mean = array.reduce((a, b) => a + b) / n
    return Math.sqrt(array.map(x => Math.pow(x - mean, 2)).reduce((a, b) => a + b) / n)
}


// stress test (no overflows ?)
console.log('stress test (no overflows in constructor ?)')
var hrstart = process.hrtime()
for (let index = 0; index < 9999999; index++) {
    const lib = new RandomGen()
}
let hrend = process.hrtime(hrstart)
console.info('Execution time (hr): %ds %dms', hrend[0], hrend[1] / 1000000)
console.log('-----------------------\n')


// stress test (no overflows ?)
console.log('stress test (no overflows in methods?)')
var hrstart2 = process.hrtime()
const lib2 = new RandomGen()
for (let index = 0; index < 9999999; index++) {
    const rand1 = lib2.generate()
}
let hrend2 = process.hrtime(hrstart2)
console.info('Execution time (hr): %ds %dms', hrend2[0], hrend2[1] / 1000000)
console.log('-----------------------\n')

// Test versus Math.random
console.log('stress test versus Math.random')
var hrstart3 = process.hrtime()
for (let index = 0; index < 9999999; index++) {
    const rand1 = Math.random()
}
let hrend3 = process.hrtime(hrstart3)
console.info('Execution time (hr): %ds %dms', hrend3[0], hrend3[1] / 1000000)
console.log('-----------------------\n')

// Test versus crypto
console.log('stress test versus crypto.randomInt')
var hrstart4 = process.hrtime()
for (let index = 0; index < 9999999; index++) {
    const rand1 = crypto.randomInt(0, 10000)
}
let hrend4 = process.hrtime(hrstart4)
console.info('Execution time (hr): %ds %dms', hrend4[0], hrend4[1] / 1000000)
console.log('-----------------------\n')


// randomness test (no converging ?)
console.log('randomness test (no converging ?)')
const lib3 = new RandomGen()
const arr1 = []
const arr2 = []
for (let index = 0; index < 999999; index++) {
    const rand1 = lib3.generate()
    if (index < (999999 / 2))
        arr1.push(rand1)
    else
        arr2.push(rand1)
}
console.log(getStandardDeviation(arr1))
console.log(getStandardDeviation(arr2))
console.log('-----------------------')






