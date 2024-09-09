class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function deleteMiddle(head) {
    // Special case: If the list has only one node
    if (head === null || head.next === null) {
        return null;
    }
    
    // Step 1: Find the length of the list
    let length = 0;
    let current = head;
    while (current !== null) {
        length++;
        current = current.next;
    }
    
    // Step 2: Find the middle node index
    const middleIndex = Math.floor(length / 2);
    
    // Step 3: Traverse to the node before the middle node
    current = head;
    for (let i = 0; i < middleIndex - 1; i++) {
        current = current.next;
    }
    
    // Step 4: Remove the middle node
    if (middleIndex === 0) {
        // Special case: Remove the head node
        head = head.next;
    } else {
        current.next = current.next.next;
    }
    
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
    new ListNode(3, 
        new ListNode(4, 
            new ListNode(7, 
                new ListNode(1, 
                    new ListNode(2, 
                        new ListNode(6)
                    )
                )
            )
        )
    )
);

const newList = deleteMiddle(list);
printList(newList);  // Output: [1, 3, 4, 1, 2, 6]