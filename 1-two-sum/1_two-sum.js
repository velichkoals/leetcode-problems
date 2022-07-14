const arr = [2, 7, 11, 15];


const twoSum = (nums, target) => {
    const res  = [];
    for (let i = 0; i < nums.length; i++) {
       for (let j = i + 1; j < nums.length; j++) {
           if (nums[j] === target - nums[i]) {
               res.push(i);
               res.push(j);
               return res;
           }
       }
    }
    return -1;
}

console.log(twoSum(arr, 9));

// Complexity - O(n^2)

// Runtime: 102ms, faster than 65,5%
// Memory Usage: 42.7 MB, less than 50%
