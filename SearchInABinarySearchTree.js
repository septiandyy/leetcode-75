class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function searchBST(root, val) {
    if (!root) return null; // If the tree is empty, return null

    // Start from the root and navigate based on the value comparison
    if (val < root.val) {
        return searchBST(root.left, val); // Search in the left subtree
    } else if (val > root.val) {
        return searchBST(root.right, val); // Search in the right subtree
    } else {
        return root; // The node with value `val` is found
    }
}

// Example usage:
const tree1 = new TreeNode(4,
    new TreeNode(2,
        new TreeNode(1),
        new TreeNode(3)
    ),
    new TreeNode(7)
);

const tree2 = new TreeNode(4,
    new TreeNode(2,
        new TreeNode(1),
        new TreeNode(3)
    ),
    new TreeNode(7)
);

console.log(searchBST(tree1, 2)); // Output: TreeNode with value 2 and its subtree
console.log(searchBST(tree2, 5)); // Output: null