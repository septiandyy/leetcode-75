function suggestedProducts(products, searchWord) {
    // Step 1: Sort the products lexicographically
    products.sort();
    
    const result = [];
    let prefix = "";
    
    // Step 2: Iterate over each character in searchWord
    for (let char of searchWord) {
        prefix += char;
        
        // Step 3: Filter products by current prefix and take top 3
        const suggestions = products.filter(product => product.startsWith(prefix));
        result.push(suggestions.slice(0, 3));
    }
    
    return result;
}

// Example usage
console.log(suggestedProducts(["mobile","mouse","moneypot","monitor","mousepad"], "mouse"));
// Output: [["mobile","moneypot","monitor"],["mobile","moneypot","monitor"],["mouse","mousepad"],["mouse","mousepad"],["mouse","mousepad"]]

console.log(suggestedProducts(["havana"], "havana"));
// Output: [["havana"],["havana"],["havana"],["havana"],["havana"],["havana"]]