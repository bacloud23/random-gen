# Random-gen

This is an experiment. I do not pretend it is well secure. **This is a work in progress**

## Description

Many methods are used to generate pseudo-random values. **Random-gen** gets the *current time* eagerly on occasions (bootstrap, instanciating the basic class with *new* etc) and then generates a random number on demand again with a second *current time*.

## Why and how

This is based only on JavaScript and does normally behaves the same on all JavaScript engines. Contary to `Math.random()` and `crypto.getRandomValues()`.
It builds an array of random numbers like `[124, 122, 10]` basically from the current time `new Date()` and randomly (same way, not really recursively) pick some numbers from the array to build a new value and move on.

This comes with the assumption that calling successively `generate()` is not that fast, obviously it does not work with a quantom compuer.

## Example

```js
const lib = new RandomGen()
const rand1 = lib.generate()
console.log(rand1) // 2696
t.true(rand1 > 0)
const rand2 = lib.generate()
console.log(rand2) // 14861
t.true(rand2 > 0)
```

## Benchmarks

    stress test (no overflows in constructor ?)
    Execution time (hr): 5s 77.9351ms
    -----------------------

    stress test (no overflows in methods?)
    Execution time (hr): 7s 996.0777ms
    -----------------------

    stress test versus Math.random
    Execution time (hr): 0s 71.0504ms
    -----------------------

    stress test versus crypto.randomInt
    Execution time (hr): 0s 125.3639ms

### Results

For 9999999 iterations:

- `Math.random` is the fastest
- `crypto.randomInt` is faster but in the same order (1/10) apparently (9999999 iterations)
- No memory blow or overflow apparently
- It doesn't seem to converge to a value