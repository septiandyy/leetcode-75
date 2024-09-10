function singleNumber(nums) {
    let result = 0;
    for (const num of nums) {
        result ^= num; // XOR every number
    }
    return result;
}

// Example usage:
console.log(singleNumber([2,2,1]));       // Output: 1
console.log(singleNumber([4,1,2,1,2]));   // Output: 4
console.log(singleNumber([1]));           // Output: 1