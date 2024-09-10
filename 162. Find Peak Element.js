const findPeakElement = (nums) => {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        // Check if mid is a peak element
        const midValue = nums[mid];
        const leftValue = mid > 0 ? nums[mid - 1] : -Infinity;
        const rightValue = mid < nums.length - 1 ? nums[mid + 1] : -Infinity;

        if (midValue > leftValue && midValue > rightValue) {
            return mid;
        }

        // Move to the side where there is a greater neighbor
        if (midValue < rightValue) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    // In theory, this return should never be reached because the problem guarantees at least one peak
    return -1;
};

// Example usage
console.log(findPeakElement([1,2,3,1])); // Output: 2 (Index of peak element 3)
console.log(findPeakElement([1,2,1,3,5,6,4])); // Output: 5 (Index of peak element 6)