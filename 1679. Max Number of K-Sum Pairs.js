function maxOperations(nums, k) {
    let countMap = new Map();
    let operations = 0;

    for (let num of nums) {
        let complement = k - num;
        if (countMap.has(complement) && countMap.get(complement) > 0) {
            operations++;
            countMap.set(complement, countMap.get(complement) - 1);
        } else {
            countMap.set(num, (countMap.get(num) || 0) + 1);
        }
    }

    return operations;
}

// Example 1
console.log(maxOperations([1, 2, 3, 4], 5)); // Output: 2

// Example 2
console.log(maxOperations([3, 1, 3, 4, 3], 6)); // Output: 1