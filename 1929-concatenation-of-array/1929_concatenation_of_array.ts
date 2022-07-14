const arr = [1, 2, 3, 1, 4];

const concatenationOfArr = (arr: number[]):number[] => {
    return [...arr, ...arr];
}

console.log(concatenationOfArr(arr));

// Complexity of spread operation - O(n)
// Complexity - O(n)

// Runtime: 111 ms, faster than 65,45%
// Memory Usage: 47.1 MB, less than 31,8%
