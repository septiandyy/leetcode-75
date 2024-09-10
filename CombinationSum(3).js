function combinationSum3(k, n) {
    const result = [];
    const path = [];

    function backtrack(start, k, n) {
        // Base case: if we have k numbers and the sum is n
        if (k === 0 && n === 0) {
            result.push([...path]);
            return;
        }
        // If we have more than k numbers or sum exceeded, return
        if (k === 0 || n < 0) {
            return;
        }

        // Explore further by trying to add each number from start to 9
        for (let i = start; i <= 9; i++) {
            path.push(i);
            backtrack(i + 1, k - 1, n - i);
            path.pop(); // Remove the last number added to backtrack
        }
    }

    backtrack(1, k, n);
    return result;
}

// Example usage:
console.log(combinationSum3(3, 7));  // Output: [[1,2,4]]
console.log(combinationSum3(3, 9));  // Output: [[1,2,6],[1,3,5],[2,3,4]]
console.log(combinationSum3(4, 1));  // Output: []