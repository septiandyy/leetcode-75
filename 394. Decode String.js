function decodeString(s) {
    const countStack = [];
    const stringStack = [];
    let currentString = '';
    let currentNum = 0;

    for (let char of s) {
        if (char >= '0' && char <= '9') {
            // Build the current number (repeat count)
            currentNum = currentNum * 10 + (char - '0');
        } else if (char === '[') {
            // Push the current number and string onto their respective stacks
            countStack.push(currentNum);
            stringStack.push(currentString);
            // Reset for the next substring
            currentString = '';
            currentNum = 0;
        } else if (char === ']') {
            // Pop from stacks and build the substring
            const prevString = stringStack.pop();
            const repeatCount = countStack.pop();
            currentString = prevString + currentString.repeat(repeatCount);
        } else {
            // Append the character to the current string
            currentString += char;
        }
    }

    return currentString;
}