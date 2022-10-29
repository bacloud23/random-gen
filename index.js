function RandomGen() {
    // Might evolve
    const atomicRandom = () => process.hrtime()[1]
    const indexRandom = (length) => Math.random()*length|0;
    /**
     * 
     * @param {*} arr from an array of random numbers, generate another random number
     */
    const random = (arr) => {
        const randIndex1 = indexRandom(arr.length);
        const randIndex2 = indexRandom(arr.length);
        return arr[randIndex1] ^ arr[randIndex2]
    }
    this.randoms = []
    this.randoms.push(atomicRandom())

    /**
     * 
     */
    this.generate = () => {
        const rand = atomicRandom()
        this.randoms.push(rand)
        let output = random(this.randoms)
        return output;
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