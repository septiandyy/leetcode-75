function predictPartyVictory(senate) {
    const radiantQueue = [];
    const direQueue = [];
    
    // Populate queues with initial positions
    for (let i = 0; i < senate.length; i++) {
        if (senate[i] === 'R') {
            radiantQueue.push(i);
        } else {
            direQueue.push(i);
        }
    }
    
    // Simulate the rounds
    while (radiantQueue.length > 0 && direQueue.length > 0) {
        const radiantIndex = radiantQueue.shift();
        const direIndex = direQueue.shift();
        
        // Determine who will ban whom and re-add the winning senator to the queue
        if (radiantIndex < direIndex) {
            radiantQueue.push(radiantIndex + senate.length); // Radiant wins this round
        } else {
            direQueue.push(direIndex + senate.length); // Dire wins this round
        }
    }
    
    // Determine the winner based on which queue is not empty
    return radiantQueue.length > 0 ? "Radiant" : "Dire";
}

// Example usage:
console.log(predictPartyVictory("RD"));  // Output: "Radiant"
console.log(predictPartyVictory("RDD")); // Output: "Dire"