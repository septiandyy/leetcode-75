function rightSideView(root) {
    if (!root) return [];

    let result = [];
    let queue = [root];

    while (queue.length > 0) {
        let levelSize = queue.length;
        for (let i = 0; i < levelSize; i++) {
            let node = queue.shift();
            if (i === levelSize - 1) result.push(node.val);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
    }

    return result;
}

// Example usage:
let root1 = {
    val: 1,
    left: {
        val: 2,
        left: null,
        right: null
    },
    right: {
        val: 3,
        left: null,
        right: null
    }
};
console.log(rightSideView(root1));  // Output: [1, 3]

let root2 = {
    val: 1,
    right: {
        val: 3,
        left: null,
        right: null
    }
};
console.log(rightSideView(root2));  // Output: [1, 3]

let root3 = null;
console.log(rightSideView(root3));  // Output: []