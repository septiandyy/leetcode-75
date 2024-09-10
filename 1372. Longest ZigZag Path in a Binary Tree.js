class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function longestZigZag(root) {
    let maxZigZag = 0;

    function dfs(node, length, isLeft) {
        if (node === null) return;
        
        // Update the global maximum ZigZag length
        maxZigZag = Math.max(maxZigZag, length);
        
        // If the last move was left, move to the right child
        if (isLeft) {
            dfs(node.right, length + 1, false); // Move right
            dfs(node.left, 1, true); // Start a new ZigZag path by moving left
        } else {
            dfs(node.left, length + 1, true); // Move left
            dfs(node.right, 1, false); // Start a new ZigZag path by moving right
        }
    }

    // Start DFS from the root node
    dfs(root, 0, true); // Start with moving left from the root
    dfs(root, 0, false); // Start with moving right from the root

    return maxZigZag;
}

// Example usage
const tree1 = new TreeNode(1,
    null,
    new TreeNode(1,
        new TreeNode(1,
            null,
            new TreeNode(1,
                new TreeNode(1),
                null
            )
        ),
        new TreeNode(1)
    )
);

const tree2 = new TreeNode(1,
    new TreeNode(1,
        null,
        new TreeNode(1,
            new TreeNode(1),
            new TreeNode(1)
        )
    ),
    new TreeNode(1)
);

console.log(longestZigZag(tree1)); // Output: 3
console.log(longestZigZag(tree2)); // Output: 4