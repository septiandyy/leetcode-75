/**
 * @param {number} n
 * @return {number}
 */
var numTilings = function(n) {
    const MOD = 1000000007;
    
    if (n <= 2) {
        return n;
    }
    
    let dp = new Array(n + 1).fill(0);
    dp[1] = 1;
    dp[2] = 2;
    dp[3] = 5;
    
    for (let i = 4; i <= n; i++) {
        dp[i] = (2 * dp[i-1] + dp[i-3]) % MOD;
    }
    
    return dp[n];
};