function maxProfit(prices, fee) {
    // Initialize variables to track the maximum profit
    let cash = 0; // Profit when not holding stock
    let hold = -prices[0]; // Profit when holding stock, initially we bought the stock on day 0
    
    for (let i = 1; i < prices.length; i++) {
        // Update cash and hold states
        cash = Math.max(cash, hold + prices[i] - fee); // Max profit when not holding stock
        hold = Math.max(hold, cash - prices[i]); // Max profit when holding stock
    }
    
    return cash; // The maximum profit when not holding any stock
}

// Example usage:
const prices1 = [1, 3, 2, 8, 4, 9];
const fee1 = 2;
console.log(maxProfit(prices1, fee1)); // Output: 8

const prices2 = [1, 3, 7, 5, 10, 3];
const fee2 = 3;
console.log(maxProfit(prices2, fee2)); // Output: 6