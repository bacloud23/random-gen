import test  from "ava";
import RandomGen from "./index.js"

test("Random number is positive", (t) => {
    const lib = new RandomGen()
    const rand1 = lib.generate()
    console.log(rand1)
    t.true(rand1 > 0)
    const rand2 = lib.generate()
    console.log(rand2)
    t.true(rand2 > 0)
});

