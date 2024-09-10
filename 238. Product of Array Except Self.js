function productExceptSelf(nums) {
  const n = nums.length;
  const answer = new Array(n);
  
  // Step 1: Compute prefix products
  answer[0] = 1;  // No elements to the left of index 0
  for (let i = 1; i < n; i++) {
    answer[i] = answer[i - 1] * nums[i - 1];
  }
  
  // Step 2: Compute suffix products and final result
  let suffixProduct = 1;  // No elements to the right of the last index initially
  for (let i = n - 1; i >= 0; i--) {
    answer[i] = answer[i] * suffixProduct;
    suffixProduct *= nums[i];
  }
  
  return answer;
}

// Example usage:
console.log(productExceptSelf([1, 2, 3, 4]));      // Output: [24, 12, 8, 6]
console.log(productExceptSelf([-1, 1, 0, -3, 3])); // Output: [0, 0, 9, 0, 0]