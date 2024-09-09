function increasingTriplet(nums) {
    let first = Infinity;
    let second = Infinity;

    for (let num of nums) {
        if (num <= first) {
            first = num; // Update first if num is smaller than or equal to first
        } else if (num <= second) {
            second = num; // Update second if num is smaller than or equal to second
        } else {
            return true; // If we find a number larger than both first and second, return true
        }
    }

    return false; // If no such triplet is found, return false
}

// Example 1
console.log(increasingTriplet([1, 2, 3, 4, 5])); // Output: true

// Example 2
console.log(increasingTriplet([5, 4, 3, 2, 1])); // Output: false

// Example 3
console.log(increasingTriplet([2, 1, 5, 0, 4, 6])); // Output: true