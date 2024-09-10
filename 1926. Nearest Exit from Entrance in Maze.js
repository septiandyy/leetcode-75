function nearestExit(maze, entrance) {
    const m = maze.length;
    const n = maze[0].length;
    const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]]; // Right, Down, Left, Up
    const queue = [[entrance[0], entrance[1], 0]]; // [row, col, distance]
    const visited = new Set();
    visited.add(`${entrance[0]},${entrance[1]}`);
    
    while (queue.length > 0) {
        const [x, y, dist] = queue.shift();
        
        // Check if we are at a border (exit) but not the entrance
        if ((x !== entrance[0] || y !== entrance[1]) && (x === 0 || y === 0 || x === m - 1 || y === n - 1)) {
            return dist;
        }
        
        // Explore neighbors
        for (const [dx, dy] of directions) {
            const nx = x + dx;
            const ny = y + dy;
            if (0 <= nx && nx < m && 0 <= ny && ny < n && maze[nx][ny] === '.' && !visited.has(`${nx},${ny}`)) {
                visited.add(`${nx},${ny}`);
                queue.push([nx, ny, dist + 1]);
            }
        }
    }
    
    return -1;
}

// Example usage
const maze1 = [["+", "+", ".", "+"], [".", ".", ".", "+"], ["+", "+", "+", "."]];
const entrance1 = [1, 2];
console.log(nearestExit(maze1, entrance1)); // Output: 1

const maze2 = [["+", "+", "+"], [".", ".", "."], ["+", "+", "+"]];
const entrance2 = [1, 0];
console.log(nearestExit(maze2, entrance2)); // Output: 2

const maze3 = [[".", "+"]];
const entrance3 = [0, 0];
console.log(nearestExit(maze3, entrance3)); // Output: -1