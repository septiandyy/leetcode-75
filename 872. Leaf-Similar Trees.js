class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function collectLeaves(root, leaves) {
    if (root === null) return;

    // If the node is a leaf, add its value to leaves list
    if (root.left === null && root.right === null) {
        leaves.push(root.val);
        return;
    }

    // Traverse left and right subtree
    if (root.left !== null) collectLeaves(root.left, leaves);
    if (root.right !== null) collectLeaves(root.right, leaves);
}

function leafSimilar(root1, root2) {
    const leaves1 = [];
    const leaves2 = [];
    
    // Collect leaves from both trees
    collectLeaves(root1, leaves1);
    collectLeaves(root2, leaves2);
    
    // Compare the leaf sequences
    return leaves1.join(',') === leaves2.join(',');
}

// Example usage
const tree1 = new TreeNode(3, 
    new TreeNode(5, 
        new TreeNode(6), 
        new TreeNode(2, 
            new TreeNode(7), 
            new TreeNode(4)
        )
    ), 
    new TreeNode(1, 
        null, 
        new TreeNode(9, 
            null, 
            new TreeNode(8)
        )
    )
);

const tree2 = new TreeNode(3, 
    new TreeNode(5, 
        new TreeNode(6), 
        new TreeNode(7)
    ), 
    new TreeNode(1, 
        null, 
        new TreeNode(4, 
            new TreeNode(2, 
                null, 
                new TreeNode(9)
            ), 
            new TreeNode(8)
        )
    )
);

console.log(leafSimilar(tree1, tree2)); // Output: true