function eraseOverlapIntervals(intervals) {
    if (intervals.length === 0) return 0;

    // Sort intervals by end time
    intervals.sort((a, b) => a[1] - b[1]);

    let end = intervals[0][1];
    let count = 0;

    for (let i = 1; i < intervals.length; i++) {
        if (intervals[i][0] < end) {
            // There's an overlap, so we need to remove this interval
            count++;
        } else {
            // No overlap, update the end time to the end of the current interval
            end = intervals[i][1];
        }
    }

    return count;
}

// Example usage
console.log(eraseOverlapIntervals([[1,2],[2,3],[3,4],[1,3]])); // Output: 1
console.log(eraseOverlapIntervals([[1,2],[1,2],[1,2]])); // Output: 2
console.log(eraseOverlapIntervals([[1,2],[2,3]])); // Output: 0