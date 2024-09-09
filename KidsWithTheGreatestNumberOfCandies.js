function kidsWithCandies(candies, extraCandies) {
    let maxCandies = Math.max(...candies);
    return candies.map(candy => candy + extraCandies >= maxCandies);
}

// Example 1
console.log(kidsWithCandies([2, 3, 5, 1, 3], 3)); // Output: [true,true,true,false,true]

// Example 2
console.log(kidsWithCandies([4, 2, 1, 1, 2], 1)); // Output: [true,false,false,false,false]

// Example 3
console.log(kidsWithCandies([12, 1, 12], 10)); // Output: [true,false,true]