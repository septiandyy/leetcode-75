function findMaxAverage(nums, k) {
    let maxSum = 0;
    let currentSum = 0;
    
    // Calculate the sum of the first k elements
    for (let i = 0; i < k; i++) {
        currentSum += nums[i];
    }
    
    // Set the initial maxSum to the currentSum
    maxSum = currentSum;
    
    // Slide the window across the array
    for (let i = k; i < nums.length; i++) {
        currentSum = currentSum - nums[i - k] + nums[i];
        maxSum = Math.max(maxSum, currentSum);
    }
    
    // Calculate and return the maximum average
    return maxSum / k;
}

// Example 1
console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4)); // Output: 12.75

// Example 2
console.log(findMaxAverage([5], 1)); // Output: 5.00