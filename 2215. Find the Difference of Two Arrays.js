function findDifference(nums1, nums2) {
    // Convert arrays to sets
    const set1 = new Set(nums1);
    const set2 = new Set(nums2);
    
    // Find elements in set1 that are not in set2
    const diff1 = [...set1].filter(x => !set2.has(x));
    
    // Find elements in set2 that are not in set1
    const diff2 = [...set2].filter(x => !set1.has(x));
    
    return [diff1, diff2];
}

// Example usage:
console.log(findDifference([1, 2, 3], [2, 4, 6]));  // Output: [[1, 3], [4, 6]]
console.log(findDifference([1, 2, 3, 3], [1, 1, 2, 2]));  // Output: [[3], []]