//given a string, return the word with the most repeated characters
//if no word has repeated, return -1
//incomplete

function letterCount(str) {
    const countRepeats = word => {
        let repeats = 0;
        let counts = {};
        
        for(let i = 0; i < word.length; i++) {
            if(counts[word[i]]) {
                counts[word[i]]++;
            } else {
                counts[word[i]] = 1;
            }
        }
        return 
    }
    return -1;
}
