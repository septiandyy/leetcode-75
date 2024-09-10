function minFlips(a, b, c) {
    let flips = 0;
    
    // Iterate over each bit position
    for (let i = 0; i < 32; i++) {
        const bitA = (a >> i) & 1;
        const bitB = (b >> i) & 1;
        const bitC = (c >> i) & 1;
        
        if (bitC === 0) {
            // c has 0, so both a and b must be 0
            if (bitA === 1) flips++;
            if (bitB === 1) flips++;
        } else {
            // c has 1, so at least one of a or b must be 1
            if (bitA === 0 && bitB === 0) flips++;
        }
    }
    
    return flips;
}

// Example usage
console.log(minFlips(2, 6, 5)); // Output: 3
console.log(minFlips(4, 2, 7)); // Output: 1
console.log(minFlips(1, 2, 3)); // Output: 0