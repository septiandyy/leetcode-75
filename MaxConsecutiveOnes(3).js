function longestOnes(nums, k) {
    let left = 0; // Left pointer of the sliding window
    let zeroCount = 0; // Count of zeros in the current window
    let maxLength = 0; // Maximum length of the subarray with at most k zeros

    for (let right = 0; right < nums.length; right++) {
        // Expand the window by including nums[right]
        if (nums[right] === 0) {
            zeroCount++;
        }

        // If zeroCount exceeds k, move the left pointer
        while (zeroCount > k) {
            if (nums[left] === 0) {
                zeroCount--;
            }
            left++;
        }

        // Update maxLength with the current window size
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
}

// Example 1
console.log(longestOnes([1,1,1,0,0,0,1,1,1,1,0], 2)); // Output: 6

// Example 2
console.log(longestOnes([0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], 3)); // Output: 10