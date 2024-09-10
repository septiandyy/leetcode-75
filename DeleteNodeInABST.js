class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function deleteNode(root, key) {
    if (!root) return null;

    if (key < root.val) {
        // Key is in the left subtree
        root.left = deleteNode(root.left, key);
    } else if (key > root.val) {
        // Key is in the right subtree
        root.right = deleteNode(root.right, key);
    } else {
        // Node with key found
        if (!root.left) {
            // Node with only right child or no child
            return root.right;
        } else if (!root.right) {
            // Node with only left child
            return root.left;
        }

        // Node with two children: get the inorder successor (smallest in the right subtree)
        let minNode = findMin(root.right);
        root.val = minNode.val;
        root.right = deleteNode(root.right, minNode.val);
    }
    return root;
}

function findMin(node) {
    while (node.left) {
        node = node.left;
    }
    return node;
}

// Example usage
const tree1 = new TreeNode(5,
    new TreeNode(3,
        new TreeNode(2),
        new TreeNode(4)
    ),
    new TreeNode(6,
        null,
        new TreeNode(7)
    )
);

console.log(deleteNode(tree1, 3)); // Output: TreeNode with root 5 after deleting 3