function removeStars(s) {
    const stack = [];

    for (let char of s) {
        if (char === '*') {
            // Remove the closest non-star character to the left
            stack.pop();
        } else {
            // Push the current character onto the stack
            stack.push(char);
        }
    }

    // Join the characters in the stack to form the resulting string
    return stack.join('');
}

// Example usage:
console.log(removeStars("leet**cod*e")); // Output: "lecoe"
console.log(removeStars("erase*****"));  // Output: ""