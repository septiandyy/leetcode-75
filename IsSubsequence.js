// Function to check if s is a subsequence of t using a two-pointer technique
function isSubsequence(s, t) {
    let sPointer = 0;
    let tPointer = 0;

    while (sPointer < s.length && tPointer < t.length) {
        if (s[sPointer] === t[tPointer]) {
            sPointer++;
        }
        tPointer++;
    }

    return sPointer === s.length;
}

// Function to preprocess t and build an index map for efficient querying
function preprocess(t) {
    const map = new Map();
    for (let i = 0; i < t.length; i++) {
        if (!map.has(t[i])) {
            map.set(t[i], []);
        }
        map.get(t[i]).push(i);
    }
    return map;
}

// Function to check if s is a subsequence of t using the preprocessed map
function isSubsequenceWithIndex(s, tMap) {
    let prevIndex = -1;
    for (let char of s) {
        if (!tMap.has(char)) return false;
        const indices = tMap.get(char);
        // Find the first index in indices that is greater than prevIndex
        let found = false;
        for (let index of indices) {
            if (index > prevIndex) {
                prevIndex = index;
                found = true;
                break;
            }
        }
        if (!found) return false;
    }
    return true;
}

// Example usage
const t = "ahbgdc";
const tMap = preprocess(t);

// Handle multiple queries
console.log(isSubsequenceWithIndex("abc", tMap)); // Output: true
console.log(isSubsequenceWithIndex("axc", tMap)); // Output: false