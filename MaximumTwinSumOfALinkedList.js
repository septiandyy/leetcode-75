
/**
 * @param {ListNode} head
 * @return {number}
 */
var pairSum = function(head) {
    // Convert linked list to array
    const values = [];
    let current = head;
    while (current !== null) {
        values.push(current.val);
        current = current.next;
    }
    
    let maxTwinSum = 0;
    const n = values.length;
    
    // Calculate twin sums and find the maximum
    for (let i = 0; i < n / 2; i++) {
        const twinSum = values[i] + values[n - 1 - i];
        maxTwinSum = Math.max(maxTwinSum, twinSum);
    }
    
    return maxTwinSum;
};