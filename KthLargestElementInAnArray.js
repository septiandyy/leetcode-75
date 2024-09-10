class MinHeap {
    constructor() {
        this.heap = [];
    }

    insert(num) {
        this.heap.push(num);
        this._heapifyUp(this.heap.length - 1);
    }

    remove() {
        if (this.heap.length === 0) return;
        const root = this.heap[0];
        this.heap[0] = this.heap.pop();
        this._heapifyDown(0);
        return root;
    }

    _heapifyUp(index) {
        let parent = Math.floor((index - 1) / 2);
        if (index > 0 && this.heap[index] < this.heap[parent]) {
            [this.heap[index], this.heap[parent]] = [this.heap[parent], this.heap[index]];
            this._heapifyUp(parent);
        }
    }

    _heapifyDown(index) {
        let left = 2 * index + 1;
        let right = 2 * index + 2;
        let smallest = index;

        if (left < this.heap.length && this.heap[left] < this.heap[smallest]) {
            smallest = left;
        }
        if (right < this.heap.length && this.heap[right] < this.heap[smallest]) {
            smallest = right;
        }
        if (smallest !== index) {
            [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
            this._heapifyDown(smallest);
        }
    }

    getMin() {
        return this.heap[0];
    }

    size() {
        return this.heap.length;
    }
}

const findKthLargest = (nums, k) => {
    const minHeap = new MinHeap();

    for (const num of nums) {
        minHeap.insert(num);
        if (minHeap.size() > k) {
            minHeap.remove();
        }
    }

    return minHeap.getMin();
};

// Example usage
console.log(findKthLargest([3,2,1,5,6,4], 2)); // Output: 5
console.log(findKthLargest([3,2,3,1,2,4,5,5,6], 4)); // Output: 4