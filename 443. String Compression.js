function compress(chars) {
    let write = 0;
    let i = 0;

    while (i < chars.length) {
        let char = chars[i];
        let count = 0;

        // Count the number of occurrences of the current character
        while (i < chars.length && chars[i] === char) {
            i++;
            count++;
        }

        // Write the character to the write position
        chars[write++] = char;

        // Write the count if greater than 1
        if (count > 1) {
            let countStr = count.toString();
            for (let j = 0; j < countStr.length; j++) {
                chars[write++] = countStr[j];
            }
        }
    }

    return write;
}

// Example 1
let chars1 = ["a","a","b","b","c","c","c"];
console.log(compress(chars1)); // Output: 6
console.log(chars1.slice(0, 6)); // ["a","2","b","2","c","3"]

// Example 2
let chars2 = ["a"];
console.log(compress(chars2)); // Output: 1
console.log(chars2.slice(0, 1)); // ["a"]

// Example 3
let chars3 = ["a","b","b","b","b","b","b","b","b","b","b","b","b"];
console.log(compress(chars3)); // Output: 4
console.log(chars3.slice(0, 4)); // ["a","b","1","2"]