const nums1 = [2, 4];
const nums2 = [1, 2, 3, 4];

function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
    const res: number[] = [];

    for(let i = 0; i < nums1.length; i++) {
        let elemInNums2: number = nums2.indexOf(nums1[i]);
        let tempNum: number = -1;

        while(elemInNums2 < nums2.length) {
            elemInNums2 += 1;
            if(nums1[i] < nums2[elemInNums2]) {
                tempNum = nums2[elemInNums2];
                res.push(tempNum);
                break;

            }
        }
        if (tempNum === -1) res.push(-1);
    }
    return res;
}

console.log(nextGreaterElement(nums1, nums2));

// Complexity - O(n^2)

// Runtime: 86 ms, faster than 78,26%
// Memory Usage: 44.7 MB, less than 80.9%
