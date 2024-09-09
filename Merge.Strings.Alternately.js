function mergeAlternately(word1, word2) {
    let mergedString = "";
    let i = 0, j = 0;

    // Iterate through both strings until the end of one of them is reached
    while (i < word1.length && j < word2.length) {
        mergedString += word1[i++];
        mergedString += word2[j++];
    }

    // Append the remaining characters of the longer string
    if (i < word1.length) {
        mergedString += word1.slice(i);
    }
    if (j < word2.length) {
        mergedString += word2.slice(j);
    }

    return mergedString;
}

// Example 1
console.log(mergeAlternately("abc", "pqr")); // Output: "apbqcr"

// Example 2
console.log(mergeAlternately("ab", "pqrs")); // Output: "apbqrs"

// Example 3
console.log(mergeAlternately("abcd", "pq")); // Output: "apbqcd"