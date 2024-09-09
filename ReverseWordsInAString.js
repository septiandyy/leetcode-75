function reverseWords(s) {
    // Step 1: Trim leading and trailing spaces
    s = s.trim();
    
    // Step 2: Split the string by spaces
    const words = s.split(' ');
  
    // Step 3: Filter out any empty strings from multiple spaces
    const filteredWords = words.filter(word => word.length > 0);
  
    // Step 4: Reverse the array of words
    const reversedWords = filteredWords.reverse();
  
    // Step 5: Join the words with a single space
    return reversedWords.join(' ');
  }
  
  // Example usage:
  console.log(reverseWords("the sky is blue")); // Output: "blue is sky the"
  console.log(reverseWords("  hello world  ")); // Output: "world hello"
  console.log(reverseWords("a good   example")); // Output: "example good a"