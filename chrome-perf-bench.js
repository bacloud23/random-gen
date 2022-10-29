import RandomGen from "./index.js"

const lib = new RandomGen()
for (let index = 0; index < 100; index++) {
    console.log(lib.generate())
}

