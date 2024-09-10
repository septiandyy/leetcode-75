function canVisitAllRooms(rooms) {
    const n = rooms.length;
    const visited = new Array(n).fill(false);
    const queue = [0];
    let visitedCount = 0;

    while (queue.length > 0) {
        const room = queue.shift();
        if (!visited[room]) {
            visited[room] = true;
            visitedCount++;
            for (const key of rooms[room]) {
                if (!visited[key]) {
                    queue.push(key);
                }
            }
        }
    }

    return visitedCount === n;
}

// Example usage
const rooms1 = [[1], [2], [3], []];
console.log(canVisitAllRooms(rooms1)); // Output: true

const rooms2 = [[1, 3], [3, 0, 1], [2], [0]];
console.log(canVisitAllRooms(rooms2)); // Output: false