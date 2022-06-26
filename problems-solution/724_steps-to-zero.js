const numOfSteps = (num) => {
    let steps = 0;
    while (num > 0) {
        if (num % 2 === 0) {
            num /= 2;
            steps += 1;
        } else {
            num -= 1;
            steps += 1;
        }
    }
    return steps;
}

console.log(numOfSteps(123));

// Complexity - 0(n)

// Runtime: 67 ms, faster than 84.3%
// Memory Usage: 42.3 MB, less than 12%
