function equalPairs(grid) {
    const n = grid.length;
    const rowStrings = new Map();
    
    // Helper function to convert an array to a string
    function arrayToString(arr) {
        return arr.join(',');
    }
    
    // Convert rows to string and count their occurrences
    for (let i = 0; i < n; i++) {
        const rowString = arrayToString(grid[i]);
        rowStrings.set(rowString, (rowStrings.get(rowString) || 0) + 1);
    }
    
    let count = 0;
    
    // Check each column
    for (let j = 0; j < n; j++) {
        const column = [];
        for (let i = 0; i < n; i++) {
            column.push(grid[i][j]);
        }
        const columnString = arrayToString(column);
        if (rowStrings.has(columnString)) {
            count += rowStrings.get(columnString);
        }
    }
    
    return count;
}

// Example usage:
const grid1 = [[3,2,1],[1,7,6],[2,7,7]];
console.log(equalPairs(grid1)); // Output: 1

const grid2 = [[3,1,2,2],[1,4,4,5],[2,4,2,2],[2,4,2,2]];
console.log(equalPairs(grid2)); // Output: 3