class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function maxLevelSum(root) {
    if (!root) return 1;

    const levelSums = new Map(); // Map to store sum of nodes at each level
    const queue = [[root, 1]]; // Queue to perform BFS, storing node and its level

    while (queue.length > 0) {
        const [node, level] = queue.shift();

        if (!levelSums.has(level)) {
            levelSums.set(level, 0);
        }
        levelSums.set(level, levelSums.get(level) + node.val);

        if (node.left) queue.push([node.left, level + 1]);
        if (node.right) queue.push([node.right, level + 1]);
    }

    let maxSum = -Infinity;
    let minLevel = 1;

    for (const [level, sum] of levelSums.entries()) {
        if (sum > maxSum || (sum === maxSum && level < minLevel)) {
            maxSum = sum;
            minLevel = level;
        }
    }

    return minLevel;
}

// Example usage:
const tree1 = new TreeNode(1,
    new TreeNode(7,
        new TreeNode(7),
        new TreeNode(-8)
    ),
    new TreeNode(0)
);

const tree2 = new TreeNode(989,
    null,
    new TreeNode(10250,
        new TreeNode(98693),
        new TreeNode(-89388,
            null,
            new TreeNode(-32127)
        )
    )
);

console.log(maxLevelSum(tree1)); // Output: 2
console.log(maxLevelSum(tree2)); // Output: 2