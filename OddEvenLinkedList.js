class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function oddEvenList(head) {
    if (head === null || head.next === null) {
        return head; // Return early if the list is empty or has only one node
    }

    let odd = head; // Head of the odd indexed nodes
    let even = head.next; // Head of the even indexed nodes
    let evenHead = even; // Keep track of the head of the even indexed nodes

    while (even !== null && even.next !== null) {
        odd.next = even.next; // Link odd nodes
        odd = odd.next; // Move to the next odd node
        even.next = odd.next; // Link even nodes
        even = even.next; // Move to the next even node
    }

    odd.next = evenHead; // Link the end of the odd list to the head of the even list
    return head;
}

// Helper function to print the list (for testing purposes)
function printList(head) {
    let result = [];
    let current = head;
    while (current !== null) {
        result.push(current.val);
        current = current.next;
    }
    console.log(result);
}

// Example usage
const list = new ListNode(1, 
    new ListNode(2, 
        new ListNode(3, 
            new ListNode(4, 
                new ListNode(5)
            )
        )
    )
);

const newList = oddEvenList(list);
printList(newList);  // Output: [1, 3, 5, 2, 4]