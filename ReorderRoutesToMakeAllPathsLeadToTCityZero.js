/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var minReorder = function(n, connections) {
    // Create adjacency list
    const graph = Array(n).fill().map(() => []);
    const edges = new Set();
    
    // Build the graph and edge set
    for (const [a, b] of connections) {
        graph[a].push(b);
        graph[b].push(a);
        edges.add(`${a},${b}`);
    }
    
    let changes = 0;
    const visited = new Set();
    
    function dfs(city) {
        visited.add(city);
        
        for (const neighbor of graph[city]) {
            if (!visited.has(neighbor)) {
                // Check if the edge needs to be reversed
                if (!edges.has(`${neighbor},${city}`)) {
                    changes++;
                }
                dfs(neighbor);
            }
        }
    }
    
    dfs(0);  // Start DFS from the capital city
    
    return changes;
};