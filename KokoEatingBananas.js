function minEatingSpeed(piles, h) {
    const getHours = (k) => {
        let hours = 0;
        for (const pile of piles) {
            hours += Math.ceil(pile / k);
        }
        return hours;
    };

    let left = 1;
    let right = Math.max(...piles);
    let result = right;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        const hoursNeeded = getHours(mid);

        if (hoursNeeded <= h) {
            result = mid;
            right = mid - 1;  // Try for a smaller speed
        } else {
            left = mid + 1;  // Increase the speed
        }
    }

    return result;
}

// Example usage:
console.log(minEatingSpeed([3, 6, 7, 11], 8)); // Output: 4
console.log(minEatingSpeed([30, 11, 23, 4, 20], 5)); // Output: 30
console.log(minEatingSpeed([30, 11, 23, 4, 20], 6)); // Output: 23