function canPlaceFlowers(flowerbed, n) {
    let length = flowerbed.length;
    
    for (let i = 0; i < length; i++) {
        if (flowerbed[i] === 0) {
            let prevEmpty = (i === 0 || flowerbed[i - 1] === 0);
            let nextEmpty = (i === length - 1 || flowerbed[i + 1] === 0);
            
            if (prevEmpty && nextEmpty) {
                flowerbed[i] = 1;
                n--;
                if (n === 0) {
                    return true;
                }
            }
        }
    }
    
    return n <= 0;
}

// Example 1
console.log(canPlaceFlowers([1, 0, 0, 0, 1], 1)); // Output: true

// Example 2
console.log(canPlaceFlowers([1, 0, 0, 0, 1], 2)); // Output: false