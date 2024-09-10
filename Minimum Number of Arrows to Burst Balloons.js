function findMinArrowShots(points) {
    if (points.length === 0) {
        return 0;
    }
    
    // Sort balloons by their end positions
    points.sort((a, b) => a[1] - b[1]);
    
    let arrows = 0;
    let end = -Infinity;
    
    // Iterate through the sorted balloons
    for (const [start, balloonEnd] of points) {
        // If the current balloon starts after the end of the last arrow,
        // we need a new arrow
        if (start > end) {
            arrows++;
            end = balloonEnd;
        }
    }
    
    return arrows;
}

// Example usage:
const points1 = [[10,16],[2,8],[1,6],[7,12]];
console.log(findMinArrowShots(points1)); // Output: 2

const points2 = [[1,2],[3,4],[5,6],[7,8]];
console.log(findMinArrowShots(points2)); // Output: 4

const points3 = [[1,2],[2,3],[3,4],[4,5]];
console.log(findMinArrowShots(points3)); // Output: 2