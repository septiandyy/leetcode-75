function countBits(n) {
    // Initialize an array to store the number of 1's for each number from 0 to n
    const ans = new Array(n + 1).fill(0);
    
    // Iterate from 1 to n to fill in the ans array
    for (let i = 1; i <= n; ++i) {
        // The number of 1's in the current number is one more than the number of 1's in (i & (i - 1))
        ans[i] = ans[i >> 1] + (i & 1);
    }
    
    return ans;
}

// Example usage:
const n = 5;
const result = countBits(n);
console.log(result); // Output: [0, 1, 1, 2, 1, 2]