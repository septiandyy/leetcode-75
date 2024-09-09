class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

function reverseList(head) {
    if (!head || !head.next) {
        return head;
    }

    let newHead = reverseList(head.next);
    head.next.next = head;
    head.next = null;

    return newHead;
}

// Example usage:
// Create linked list: 1 -> 2 -> 3 -> 4 -> 5
// Output: 5 -> 4 -> 3 -> 2 -> 1

// Create linked list: 1 -> 2
// Output: 2 -> 1

// Create empty linked list
// Output: []

// Test cases
let head1 = new ListNode(1);
head1.next = new ListNode(2);
head1.next.next = new ListNode(3);
head1.next.next.next = new ListNode(4);
head1.next.next.next.next = new ListNode(5);

console.log(reverseList(head1).val); // Output: 5

let head2 = new ListNode(1);
head2.next = new ListNode(2);

console.log(reverseList(head2).val); // Output: 2

let head3 = null;

console.log(reverseList(head3)); // Output: null