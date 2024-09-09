function lowestCommonAncestor(root, p, q) {
    if (!root) return null;

    if (root === p || root === q) return root;

    let left = lowestCommonAncestor(root.left, p, q);
    let right = lowestCommonAncestor(root.right, p, q);

    if (left && right) return root;
    return left ? left : right;
}

// Example usage:
let root1 = {
    val: 3,
    left: {
        val: 5,
        left: {
            val: 6,
            left: null,
            right: null
        },
        right: {
            val: 2,
            left: null,
            right: null
        }
    },
    right: {
        val: 1,
        left: null,
        right: null
    }
};
let p1 = root1.left.left;
let q1 = root1.right;
console.log(lowestCommonAncestor(root1, p1, q1));  // Output: 3

let root2 = {
    val: 1,
    left: {
        val: 2,
        left: null,
        right: null
    },
    right: null
};
let p2 = root2.left;
let q2 = root2.left;
console.log(lowestCommonAncestor(root2, p2, q2));  // Output: 2

let root3 = {
    val: 1,
    left: {
        val: 2,
        left: null,
        right: null
    },
    right: null
};
let p3 = root3.left;
let q3 = root3.left;
console.log(lowestCommonAncestor(root3, p3, q3));  // Output: 2