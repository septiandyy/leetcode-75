class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function goodNodes(root) {
    function dfs(node, maxSoFar) {
        if (node === null) return 0;

        // Check if the current node is a good node
        let count = 0;
        if (node.val >= maxSoFar) {
            count = 1; // Current node is a good node
        }

        // Update the maximum value for the path
        let newMax = Math.max(maxSoFar, node.val);

        // Recursively count good nodes in the left and right subtrees
        count += dfs(node.left, newMax);
        count += dfs(node.right, newMax);

        return count;
    }

    // Start DFS traversal from the root
    return dfs(root, -Infinity); // Start with negative infinity as initial maximum
}

// Example usage
const tree1 = new TreeNode(3, 
    new TreeNode(1, 
        null, 
        null
    ), 
    new TreeNode(4, 
        new TreeNode(3, 
            null, 
            null
        ), 
        new TreeNode(5, 
            null, 
            null
        )
    )
);

const tree2 = new TreeNode(3, 
    new TreeNode(3, 
        new TreeNode(4, 
            null, 
            null
        ), 
        null
    ), 
    new TreeNode(2, 
        null, 
        null
    )
);

const tree3 = new TreeNode(1);

console.log(goodNodes(tree1)); // Output: 4
console.log(goodNodes(tree2)); // Output: 3
console.log(goodNodes(tree3)); // Output: 1