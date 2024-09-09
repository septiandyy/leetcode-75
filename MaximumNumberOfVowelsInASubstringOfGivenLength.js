function maxVowels(s, k) {
    const isVowel = (char) => 'aeiou'.includes(char);

    let maxCount = 0;
    let currentCount = 0;

    // Count vowels in the first window
    for (let i = 0; i < k; i++) {
        if (isVowel(s[i])) {
            currentCount++;
        }
    }

    maxCount = currentCount;

    // Slide the window across the string
    for (let i = k; i < s.length; i++) {
        if (isVowel(s[i])) {
            currentCount++;
        }
        if (isVowel(s[i - k])) {
            currentCount--;
        }
        maxCount = Math.max(maxCount, currentCount);
    }

    return maxCount;
}

// Example 1
console.log(maxVowels("abciiidef", 3)); // Output: 3

// Example 2
console.log(maxVowels("aeiou", 2)); // Output: 2

// Example 3
console.log(maxVowels("leetcode", 3)); // Output: 2