function dailyTemperatures(temperatures) {
    const n = temperatures.length;
    const result = new Array(n).fill(0);
    const stack = []; // Stack to store indices of temperatures

    for (let i = 0; i < n; i++) {
        // While stack is not empty and the current temperature is greater than the temperature at stack's top index
        while (stack.length > 0 && temperatures[i] > temperatures[stack[stack.length - 1]]) {
            const index = stack.pop();
            result[index] = i - index; // Calculate the number of days
        }
        // Push the current index onto the stack
        stack.push(i);
    }

    return result;
}