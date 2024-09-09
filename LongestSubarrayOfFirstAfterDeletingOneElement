function longestSubarray(nums) {
    let left = 0; // Left pointer of the sliding window
    let zeroCount = 0; // Count of zeros in the current window
    let maxLength = 0; // Maximum length of the subarray with at most 1 zero

    for (let right = 0; right < nums.length; right++) {
        if (nums[right] === 0) {
            zeroCount++;
        }

        // If more than 1 zero, move the left pointer
        while (zeroCount > 1) {
            if (nums[left] === 0) {
                zeroCount--;
            }
            left++;
        }

        // Update maxLength; -1 because we need to delete exactly one element
        maxLength = Math.max(maxLength, right - left);
    }

    return maxLength;
}

// Example 1
console.log(longestSubarray([1,1,0,1])); // Output: 3

// Example 2
console.log(longestSubarray([0,1,1,1,0,1,1,0,1])); // Output: 5

// Example 3
console.log(longestSubarray([1,1,1])); // Output: 2