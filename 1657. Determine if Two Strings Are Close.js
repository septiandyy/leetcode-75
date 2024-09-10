function closeStrings(word1, word2) {
    // Check if lengths are the same
    if (word1.length !== word2.length) {
        return false;
    }

    // Helper function to count character frequencies
    function getCharFrequency(word) {
        const frequencyMap = new Map();
        for (const char of word) {
            frequencyMap.set(char, (frequencyMap.get(char) || 0) + 1);
        }
        return frequencyMap;
    }

    // Get frequency maps for both words
    const freq1 = getCharFrequency(word1);
    const freq2 = getCharFrequency(word2);

    // If the sets of characters are different, return false
    const set1 = new Set(freq1.keys());
    const set2 = new Set(freq2.keys());
    if (!areSetsEqual(set1, set2)) {
        return false;
    }

    // Compare frequency distributions
    return areArraysEqual([...freq1.values()].sort((a, b) => a - b), 
                          [...freq2.values()].sort((a, b) => a - b));
}

// Helper function to check if two sets are equal
function areSetsEqual(set1, set2) {
    if (set1.size !== set2.size) return false;
    return [...set1].every(item => set2.has(item));
}

// Helper function to check if two arrays are equal
function areArraysEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    return arr1.every((value, index) => value === arr2[index]);
}

// Example usage:
console.log(closeStrings("abc", "bca")); // Output: true
console.log(closeStrings("a", "aa")); // Output: false
console.log(closeStrings("cabbba", "abbccc")); // Output: true