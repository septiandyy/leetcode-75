function uniqueOccurrences(arr) {
    const frequencyMap = new Map();
    
    // Count the occurrences of each value
    for (const num of arr) {
        frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
    }
    
    // Create a set to track frequencies
    const frequencySet = new Set();
    
    // Check if all frequencies are unique
    for (const count of frequencyMap.values()) {
        if (frequencySet.has(count)) {
            return false;
        }
        frequencySet.add(count);
    }
    
    return true;
}

// Example usage:
console.log(uniqueOccurrences([1, 2, 2, 1, 1, 3])); // Output: true
console.log(uniqueOccurrences([1, 2])); // Output: false
console.log(uniqueOccurrences([-3, 0, 1, -3, 1, 1, 1, -3, 10, 0])); // Output: true