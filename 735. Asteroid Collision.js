function asteroidCollision(asteroids) {
    const stack = [];

    for (let asteroid of asteroids) {
        // Process each asteroid
        while (stack.length > 0 && asteroid < 0 && stack[stack.length - 1] > 0) {
            const top = stack[stack.length - 1];
            if (Math.abs(asteroid) > top) {
                // The new asteroid is larger and destroys the top asteroid
                stack.pop();
            } else if (Math.abs(asteroid) === top) {
                // Both asteroids are the same size and destroy each other
                stack.pop();
                asteroid = 0; // The current asteroid is destroyed
            } else {
                // The new asteroid is smaller and is destroyed
                asteroid = 0;
            }
        }
        if (asteroid !== 0) {
            stack.push(asteroid);
        }
    }

    return stack;
}

// Example usage:
console.log(asteroidCollision([5, 10, -5])); // Output: [5, 10]
console.log(asteroidCollision([8, -8]));     // Output: []
console.log(asteroidCollision([10, 2, -5])); // Output: [10]