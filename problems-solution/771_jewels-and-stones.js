const jewels = 'bwWd';
const stones = 'WWdaWgcb';

const numJewelsInStones = (jewels, stones) => {
    let counter = 0;
    for (let i = 0; i < stones.length; i++) {
        if (jewels.includes(stones[i])) {
            counter++;
        }
    }
    return counter;
}

console.log(numJewelsInStones(jewels, stones));

// Complexity - 0(n^2)

// Runtime: 59 ms, faster than 98.4%
// Memory Usage: 41.9 MB, less than 94%
