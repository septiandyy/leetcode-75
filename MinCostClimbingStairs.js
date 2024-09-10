function minCostClimbingStairs(cost) {
    const n = cost.length;
    if (n === 2) return Math.min(cost[0], cost[1]);

    // Initialize the DP array
    const dp = new Array(n);
    dp[0] = cost[0];
    dp[1] = cost[1];

    // Fill the DP array
    for (let i = 2; i < n; i++) {
        dp[i] = cost[i] + Math.min(dp[i-1], dp[i-2]);
    }

    // The result is the minimum cost to reach the top
    return Math.min(dp[n-1], dp[n-2]);
}

// Example usage:
console.log(minCostClimbingStairs([10,15,20])); // Output: 15
console.log(minCostClimbingStairs([1,100,1,1,1,100,1,1,100,1])); // Output: 6