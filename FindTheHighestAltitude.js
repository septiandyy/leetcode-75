function largestAltitude(gain) {
    let currentAltitude = 0;
    let maxAltitude = 0;

    for (const g of gain) {
        currentAltitude += g;
        if (currentAltitude > maxAltitude) {
            maxAltitude = currentAltitude;
        }
    }

    return maxAltitude;
}

// Example usage:
console.log(largestAltitude([-5, 1, 5, 0, -7])); // Output: 1
console.log(largestAltitude([-4, -3, -2, -1, 4, 3, 2])); // Output: 0