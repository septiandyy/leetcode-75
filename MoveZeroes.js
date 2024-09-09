function moveZeroes(nums) {
    let lastNonZeroIndex = 0;

    // Traverse the array
    for (let current = 0; current < nums.length; current++) {
        if (nums[current] !== 0) {
            // Swap the non-zero element with the element at lastNonZeroIndex
            [nums[lastNonZeroIndex], nums[current]] = [nums[current], nums[lastNonZeroIndex]];
            // Move the lastNonZeroIndex forward
            lastNonZeroIndex++;
        }
    }
}