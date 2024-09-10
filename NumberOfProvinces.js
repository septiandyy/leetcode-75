function findCircleNum(isConnected) {
    const n = isConnected.length;
    const visited = new Array(n).fill(false);
    let provinceCount = 0;

    function dfs(city) {
        // Mark the city as visited
        visited[city] = true;
        // Explore all connected cities
        for (let j = 0; j < n; j++) {
            if (isConnected[city][j] === 1 && !visited[j]) {
                dfs(j);
            }
        }
    }

    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            // Start a new DFS traversal for each unvisited city
            dfs(i);
            provinceCount++;
        }
    }

    return provinceCount;
}

// Example usage
const isConnected1 = [[1,1,0],[1,1,0],[0,0,1]];
console.log(findCircleNum(isConnected1)); // Output: 2

const isConnected2 = [[1,0,0],[0,1,0],[0,0,1]];
console.log(findCircleNum(isConnected2)); // Output: 3