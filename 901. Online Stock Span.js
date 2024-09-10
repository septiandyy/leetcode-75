class StockSpanner {
    constructor() {
        this.stack = [];
    }

    next(price) {
        let span = 1;

        // Pop from stack while the stack is not empty and the top price is less than or equal to the current price
        while (this.stack.length > 0 && this.stack[this.stack.length - 1][0] <= price) {
            span += this.stack.pop()[1];
        }

        // Push the current price and its span to the stack
        this.stack.push([price, span]);

        // Return the span
        return span;
    }
}

// Example usage
const stockSpanner = new StockSpanner();
console.log(stockSpanner.next(100)); // Output: 1
console.log(stockSpanner.next(80));  // Output: 1
console.log(stockSpanner.next(60));  // Output: 1
console.log(stockSpanner.next(70));  // Output: 2
console.log(stockSpanner.next(60));  // Output: 1
console.log(stockSpanner.next(75));  // Output: 4
console.log(stockSpanner.next(85));  // Output: 6