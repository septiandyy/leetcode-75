class Graph {
    constructor() {
        this.adjacencyList = new Map();
    }

    addEdge(node1, node2, value) {
        if (!this.adjacencyList.has(node1)) this.adjacencyList.set(node1, new Map());
        if (!this.adjacencyList.has(node2)) this.adjacencyList.set(node2, new Map());
        this.adjacencyList.get(node1).set(node2, value);
        this.adjacencyList.get(node2).set(node1, 1 / value);
    }

    dfs(start, end, visited) {
        if (start === end) return 1;
        visited.add(start);

        const neighbors = this.adjacencyList.get(start);
        if (!neighbors) return -1;

        for (let [neighbor, value] of neighbors) {
            if (!visited.has(neighbor)) {
                const result = this.dfs(neighbor, end, visited);
                if (result !== -1) return result * value;
            }
        }
        return -1;
    }
}

function calcEquation(equations, values, queries) {
    const graph = new Graph();

    // Build the graph
    for (let i = 0; i < equations.length; i++) {
        const [node1, node2] = equations[i];
        const value = values[i];
        graph.addEdge(node1, node2, value);
    }

    // Process each query
    return queries.map(([start, end]) => {
        if (!graph.adjacencyList.has(start) || !graph.adjacencyList.has(end)) {
            return -1.0;
        }
        return graph.dfs(start, end, new Set());
    });
}

// Example usage:
const equations1 = [["a","b"],["b","c"]];
const values1 = [2.0, 3.0];
const queries1 = [["a","c"],["b","a"],["a","e"],["a","a"],["x","x"]];
console.log(calcEquation(equations1, values1, queries1));
// Output: [6.0, 0.5, -1.0, 1.0, -1.0]

const equations2 = [["a","b"],["b","c"],["bc","cd"]];
const values2 = [1.5, 2.5, 5.0];
const queries2 = [["a","c"],["c","b"],["bc","cd"],["cd","bc"]];
console.log(calcEquation(equations2, values2, queries2));
// Output: [3.75, 0.4, 5.0, 0.2]

const equations3 = [["a","b"]];
const values3 = [0.5];
const queries3 = [["a","b"],["b","a"],["a","c"],["x","y"]];
console.log(calcEquation(equations3, values3, queries3));
// Output: [0.5, 2.0, -1.0, -1.0]