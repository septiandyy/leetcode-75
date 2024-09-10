class TrieNode {
    constructor() {
        this.children = {}; // Dictionary of child nodes
        this.isEndOfWord = false; // Marker for end of word
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode(); // Initialize the root node
    }
    
    // Inserts a word into the Trie
    insert(word) {
        let node = this.root;
        for (let char of word) {
            if (!(char in node.children)) {
                node.children[char] = new TrieNode();
            }
            node = node.children[char];
        }
        node.isEndOfWord = true; // Mark the end of the word
    }
    
    // Returns true if the word is in the Trie
    search(word) {
        let node = this.root;
        for (let char of word) {
            if (!(char in node.children)) {
                return false;
            }
            node = node.children[char];
        }
        return node.isEndOfWord; // Check if the end of the word is marked
    }
    
    // Returns true if there is any word in the Trie that starts with the given prefix
    startsWith(prefix) {
        let node = this.root;
        for (let char of prefix) {
            if (!(char in node.children)) {
                return false;
            }
            node = node.children[char];
        }
        return true; // If we complete the prefix, it means it's present
    }
}

// Example usage
const trie = new Trie();
trie.insert("apple");
console.log(trie.search("apple"));   // Output: true
console.log(trie.search("app"));     // Output: false
console.log(trie.startsWith("app")); // Output: true
trie.insert("app");
console.log(trie.search("app"));     // Output: true