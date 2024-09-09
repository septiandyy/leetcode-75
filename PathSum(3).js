function pathSum(root, targetSum) {
    let count = 0;

    // Helper function to count paths starting from the given node
    function countPaths(node, currentSum) {
        if (!node) return 0;

        currentSum += node.val;
        let totalPaths = 0;

        // Check if the current path sum equals targetSum
        if (currentSum === targetSum) {
            totalPaths += 1;
        }

        // Continue to search in the left and right subtrees
        totalPaths += countPaths(node.left, currentSum);
        totalPaths += countPaths(node.right, currentSum);

        return totalPaths;
    }

    // Helper function to start paths from each node
    function dfs(node) {
        if (!node) return;

        // Count paths starting from the current node
        count += countPaths(node, 0);

        // Continue to search in the left and right subtrees
        dfs(node.left);
        dfs(node.right);
    }

    dfs(root);
    return count;
}

// Definition for a binary tree node
function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}

// Example Usage:
// Input: [10,5,-3,3,2,null,11,3,-2,null,1], targetSum = 8
// Output: 3
const root = new TreeNode(10,
    new TreeNode(5,
        new TreeNode(3,
            new TreeNode(3),
            new TreeNode(-2)
        ),
        new TreeNode(2,
            null,
            new TreeNode(1)
        )
    ),
    new TreeNode(-3,
        null,
        new TreeNode(11)
    )
);
console.log(pathSum(root, 8)); // Output: 3