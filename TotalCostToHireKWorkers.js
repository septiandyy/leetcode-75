/**
 * @param {number[]} costs
 * @param {number} k
 * @param {number} candidates
 * @return {number}
 */
function totalCost(costs, k, candidates) {
    let totalCost = 0;
    let left = 0;
    let right = costs.length - 1;
    
    // Use a min heap for the first 'candidates' workers
    const leftHeap = new MinHeap();
    // Use another min heap for the last 'candidates' workers
    const rightHeap = new MinHeap();
    
    // Initialize the heaps
    for (let i = 0; i < candidates; i++) {
        if (left <= right) {
            leftHeap.push([costs[left], left]);
            left++;
        }
    }
    for (let i = 0; i < candidates; i++) {
        if (left <= right) {
            rightHeap.push([costs[right], right]);
            right--;
        }
    }
    
    // Perform k hiring sessions
    for (let i = 0; i < k; i++) {
        if (leftHeap.isEmpty() || (!rightHeap.isEmpty() && rightHeap.peek()[0] < leftHeap.peek()[0])) {
            totalCost += rightHeap.peek()[0];
            rightHeap.pop();
            if (left <= right) {
                rightHeap.push([costs[right], right]);
                right--;
            }
        } else {
            totalCost += leftHeap.peek()[0];
            leftHeap.pop();
            if (left <= right) {
                leftHeap.push([costs[left], left]);
                left++;
            }
        }
    }
    
    return totalCost;
}

// MinHeap implementation
class MinHeap {
    constructor() {
        this.heap = [];
    }
    
    push(value) {
        this.heap.push(value);
        this.bubbleUp(this.heap.length - 1);
    }
    
    pop() {
        if (this.isEmpty()) return null;
        if (this.heap.length === 1) return this.heap.pop();
        
        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown(0);
        return min;
    }
    
    peek() {
        return this.isEmpty() ? null : this.heap[0];
    }
    
    isEmpty() {
        return this.heap.length === 0;
    }
    
    bubbleUp(index) {
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            if (this.compare(this.heap[index], this.heap[parentIndex]) < 0) {
                [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
                index = parentIndex;
            } else {
                break;
            }
        }
    }
    
    bubbleDown(index) {
        while (true) {
            let minIndex = index;
            const leftChild = 2 * index + 1;
            const rightChild = 2 * index + 2;
            
            if (leftChild < this.heap.length && this.compare(this.heap[leftChild], this.heap[minIndex]) < 0) {
                minIndex = leftChild;
            }
            if (rightChild < this.heap.length && this.compare(this.heap[rightChild], this.heap[minIndex]) < 0) {
                minIndex = rightChild;
            }
            
            if (minIndex !== index) {
                [this.heap[index], this.heap[minIndex]] = [this.heap[minIndex], this.heap[index]];
                index = minIndex;
            } else {
                break;
            }
        }
    }
    
    compare(a, b) {
        if (a[0] !== b[0]) return a[0] - b[0];
        return a[1] - b[1];
    }
}