function reverseVowels(s) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    let chars = s.split('');
    let left = 0;
    let right = chars.length - 1;

    while (left < right) {
        while (left < right && !vowels.has(chars[left])) {
            left++;
        }
        while (left < right && !vowels.has(chars[right])) {
            right--;
        }
        if (left < right) {
            [chars[left], chars[right]] = [chars[right], chars[left]];
            left++;
            right--;
        }
    }

    return chars.join('');
}

// Example 1
console.log(reverseVowels("hello")); // Output: "holle"

// Example 2
console.log(reverseVowels("leetcode")); // Output: "leotcede"