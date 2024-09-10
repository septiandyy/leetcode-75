// Assume guess API is provided
function guess(num) {
    // Placeholder for the actual guess function.
    // The real guess function will be provided in the system.
    // This is just a dummy implementation for demonstration purposes.
}

// Binary search function to find the picked number
function guessNumber(n) {
    let low = 1;
    let high = n;
    
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        let result = guess(mid);
        
        if (result === 0) {
            return mid; // The number is found
        } else if (result === -1) {
            high = mid - 1; // Number is lower than mid
        } else if (result === 1) {
            low = mid + 1; // Number is higher than mid
        }
    }
    
    return -1; // This line should never be reached if the inputs are correct
}