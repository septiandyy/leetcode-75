function successfulPairs(spells, potions, success) {
    // Sort potions array for binary search
    potions.sort((a, b) => a - b);
    
    // Helper function to perform binary search
    function countValidPotions(minPotion) {
        let low = 0, high = potions.length;
        while (low < high) {
            let mid = Math.floor((low + high) / 2);
            if (potions[mid] >= minPotion) {
                high = mid;
            } else {
                low = mid + 1;
            }
        }
        return potions.length - low;
    }
    
    // Result array
    let result = new Array(spells.length);
    
    for (let i = 0; i < spells.length; i++) {
        let spell = spells[i];
        let minPotion = Math.ceil(success / spell);
        result[i] = countValidPotions(minPotion);
    }
    
    return result;
}