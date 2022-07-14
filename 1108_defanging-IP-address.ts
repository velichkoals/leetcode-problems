function defangIPAddr(address: any): string {
    let res: string = '';
    for (let i = 0; i < address.length; i++) {
        if (address[i] === '.') {
           res += '[.]';
        }
        else res += address[i];

    }
    return res;
}

console.log(defangIPAddr('2.2.2'));

// Complexity - O(n)

// Runtime: 98 ms, faster than 46,5%
// Memory Usage: 42.7 MB, less than 76,3%
