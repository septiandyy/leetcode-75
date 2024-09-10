function orangesRotting(grid) {
    const rows = grid.length;
    const cols = grid[0].length;
    const queue = [];
    let freshOranges = 0;

    // Add all rotten oranges to the queue and count fresh oranges
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] === 2) {
                queue.push([i, j]);
            } else if (grid[i][j] === 1) {
                freshOranges++;
            }
        }
    }

    // Directions for 4-directional movement
    const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    let minutes = 0;

    // BFS process
    while (queue.length > 0 && freshOranges > 0) {
        let levelSize = queue.length;
        for (let i = 0; i < levelSize; i++) {
            const [r, c] = queue.shift();
            for (const [dr, dc] of directions) {
                const nr = r + dr;
                const nc = c + dc;
                if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && grid[nr][nc] === 1) {
                    grid[nr][nc] = 2;
                    queue.push([nr, nc]);
                    freshOranges--;
                }
            }
        }
        minutes++;
    }

    // Check if there are still fresh oranges left
    return freshOranges === 0 ? minutes : -1;
}

// Examples
console.log(orangesRotting([[2,1,1],[1,1,0],[0,1,1]])); // Output: 4
console.log(orangesRotting([[2,1,1],[0,1,1],[1,0,1]])); // Output: -1
console.log(orangesRotting([[0,2]])); // Output: 0