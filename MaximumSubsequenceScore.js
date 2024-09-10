/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number}
 */
var maxScore = function(nums1, nums2, k) {
    const n = nums1.length;
    const pairs = nums1.map((num, i) => [num, nums2[i]]);
    
    // Sort pairs based on nums2 in descending order
    pairs.sort((a, b) => b[1] - a[1]);
    
    let totalSum = 0;
    const minHeap = new MinPriorityQueue();
    
    // Process the first k elements
    for (let i = 0; i < k; i++) {
        totalSum += pairs[i][0];
        minHeap.enqueue(pairs[i][0], pairs[i][0]);
    }
    
    let maxScore = totalSum * pairs[k - 1][1];
    
    // Process the remaining elements
    for (let i = k; i < n; i++) {
        totalSum += pairs[i][0] - minHeap.dequeue().element;
        minHeap.enqueue(pairs[i][0], pairs[i][0]);
        
        const currentScore = totalSum * pairs[i][1];
        maxScore = Math.max(maxScore, currentScore);
    }
    
    return maxScore;
};