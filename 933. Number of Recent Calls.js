class RecentCounter {
    constructor() {
        this.requests = [];
    }

    ping(t) {
        // Add the new request time to the queue
        this.requests.push(t);
        
        // Remove requests that are outside the 3000 millisecond window
        while (this.requests[0] < t - 3000) {
            this.requests.shift();
        }

        // The number of requests within the last 3000 milliseconds
        return this.requests.length;
    }
}

// Example usage:
const recentCounter = new RecentCounter();
console.log(recentCounter.ping(1));    // Output: 1
console.log(recentCounter.ping(100));  // Output: 2
console.log(recentCounter.ping(3001)); // Output: 3
console.log(recentCounter.ping(3002)); // Output: 3