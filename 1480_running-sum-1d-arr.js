const arr = [1, 5, 15, 25];

const runningSum = (nums) => {
    const res = [];
    let sum = 0;

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        res.push(sum);
    }
    return res;
}

console.log(runningSum(arr));

// Complexity - O(n)

// Runtime: 69 ms, faster than 85,7%
// Memory Usage: 42.3 MB, less than 71%

