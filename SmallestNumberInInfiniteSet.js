class SmallestInfiniteSet {
    constructor() {
        this.nextSmallest = 1; // This keeps track of the next smallest number to pop
        this.minHeap = []; // Min-heap to store the numbers that are added back
        this.inHeap = new Set(); // Set to track the numbers that are currently in the heap
    }

    popSmallest() {
        if (this.minHeap.length > 0) {
            // Get the smallest number from the heap
            const smallest = heapq.heappop(this.minHeap);
            this.inHeap.delete(smallest);
            return smallest;
        } else {
            // Return the next smallest number and increment it
            const smallest = this.nextSmallest;
            this.nextSmallest++;
            return smallest;
        }
    }

    addBack(num) {
        if (num < this.nextSmallest && !this.inHeap.has(num)) {
            heapq.heappush(this.minHeap, num);
            this.inHeap.add(num);
        }
    }
}

// Min-heap implementation using a simple array
const heapq = {
    heappush: function(heap, item) {
        heap.push(item);
        this.siftUp(heap, heap.length - 1);
    },
    
    heappop: function(heap) {
        if (heap.length === 0) return;
        const top = heap[0];
        const end = heap.pop();
        if (heap.length > 0) {
            heap[0] = end;
            this.siftDown(heap, 0);
        }
        return top;
    },
    
    siftUp: function(heap, idx) {
        const item = heap[idx];
        while (idx > 0) {
            const parentIdx = Math.floor((idx - 1) / 2);
            const parent = heap[parentIdx];
            if (item >= parent) break;
            heap[idx] = parent;
            idx = parentIdx;
        }
        heap[idx] = item;
    },
    
    siftDown: function(heap, idx) {
        const length = heap.length;
        const item = heap[idx];
        while (true) {
            const leftIdx = 2 * idx + 1;
            const rightIdx = 2 * idx + 2;
            let swapIdx = null;
            if (leftIdx < length) {
                const left = heap[leftIdx];
                if (left < item) {
                    swapIdx = leftIdx;
                }
            }
            if (rightIdx < length) {
                const right = heap[rightIdx];
                if ((swapIdx === null && right < item) || (swapIdx !== null && right < heap[swapIdx])) {
                    swapIdx = rightIdx;
                }
            }
            if (swapIdx === null) break;
            heap[idx] = heap[swapIdx];
            heap[swapIdx] = item;
            idx = swapIdx;
        }
    }
};

// Example usage
const smallestInfiniteSet = new SmallestInfiniteSet();
console.log(smallestInfiniteSet.addBack(2)); // No output, modifies the set
console.log(smallestInfiniteSet.popSmallest()); // Output: 1
console.log(smallestInfiniteSet.popSmallest()); // Output: 2
console.log(smallestInfiniteSet.popSmallest()); // Output: 3
console.log(smallestInfiniteSet.addBack(1)); // No output, adds 1 back to the set
console.log(smallestInfiniteSet.popSmallest()); // Output: 1
console.log(smallestInfiniteSet.popSmallest()); // Output: 4
console.log(smallestInfiniteSet.popSmallest()); // Output: 5