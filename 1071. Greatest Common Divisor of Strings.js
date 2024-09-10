function gcdOfStrings(str1, str2) {
    // Helper function to compute the greatest common divisor (GCD) of two numbers
    function gcd(a, b) {
        while (b !== 0) {
            let temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }

    // Helper function to check if str can divide the target string
    function canDivide(target, str) {
        let repeatCount = target.length / str.length;
        return str.repeat(repeatCount) === target;
    }

    let gcdLength = gcd(str1.length, str2.length);
    let candidate = str1.substring(0, gcdLength);

    // Check if the candidate string can divide both str1 and str2
    if (canDivide(str1, candidate) && canDivide(str2, candidate)) {
        return candidate;
    } else {
        return "";
    }
}

// Example 1
console.log(gcdOfStrings("ABCABC", "ABC")); // Output: "ABC"

// Example 2
console.log(gcdOfStrings("ABABAB", "ABAB")); // Output: "AB"

// Example 3
console.log(gcdOfStrings("LEET", "CODE")); // Output: ""