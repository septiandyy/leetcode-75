function tribonacci(n) {
    if (n === 0) return 0;
    if (n === 1 || n === 2) return 1;

    // Initialize the base cases
    let t0 = 0, t1 = 1, t2 = 1;

    // Compute Tribonacci numbers iteratively
    for (let i = 3; i <= n; i++) {
        let t3 = t0 + t1 + t2;
        t0 = t1;
        t1 = t2;
        t2 = t3;
    }

    return t2;
}

// Example usage:
console.log(tribonacci(4));  // Output: 4
console.log(tribonacci(25)); // Output: 1389537