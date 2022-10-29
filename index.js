function RandomGen() {

    const HARD_LIMIT = 999999
    const MAX_SHIFT = 3
    // Might evolve
    // Although process.hrtime.bigint is the new one, the other is faster
    // const atomicRandom = () => Number(process.hrtime.bigint()) / 100
    const atomicRandom = () => process.hrtime()[1] / 100
    const indexRandom = (length, notMe) => {
        // const newOne = Math.random() * length | 0  The following is much slower but avoiding platform specific Math.random() 
        const newOne = atomicRandom() % length
        return notMe === newOne ? indexRandom(length, notMe) : newOne
    }
    /**
     * 
     * @param {*} arr from an array of random numbers, generate another random number
     */
    const random = (arr) => {
        const length = arr.filter(Boolean).length
        const randIndex1 = indexRandom(length, 0);
        const randIndex2 = indexRandom(length, randIndex1);
        return arr[randIndex1] ^ arr[randIndex2]
    }
    this.randoms = new Array(128).fill(0)
    // Circular 0-128
    this.index = new Int8Array(1).fill(0)
    this.randoms[Math.abs(this.index[0]++)] = atomicRandom()

    /**
     * Does the whole job of generating new numbers
     */
    this.generate = () => {
        this.randoms[Math.abs(this.index[0]++)] = atomicRandom()
        let rand = random(this.randoms)
        this.randoms[Math.abs(this.index[0]++)] = rand
        return (rand % HARD_LIMIT) << indexRandom(MAX_SHIFT);
    };

    /**
     * 
     * @param {*} val 
     * @returns 
     */
    this.method = (val) => {
        return val
    };
}
/**
 * 
 */
export default RandomGen;