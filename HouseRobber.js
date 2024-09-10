function rob(nums) {
    const n = nums.length;
    if (n === 0) return 0;
    if (n === 1) return nums[0];
    if (n === 2) return Math.max(nums[0], nums[1]);

    let prev1 = nums[0];
    let prev2 = Math.max(nums[0], nums[1]);

    for (let i = 2; i < n; i++) {
        let current = Math.max(prev2, prev1 + nums[i]);
        prev1 = prev2;
        prev2 = current;
    }

    return prev2;
}

// Example usage:
console.log(rob([1, 2, 3, 1])); // Output: 4
console.log(rob([2, 7, 9, 3, 1])); // Output: 12