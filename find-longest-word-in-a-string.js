function longest(str) {
    let words = str.split(" "); // Split the string into an array of words
    let longestWord = ""; // Variable to store the longest word

    for (let word of words) {
        if (word.length > longestWord.length) {
            longestWord = word; // Update if a longer word is found
        }
    }

    return longestWord;
}

console.log(longest('I am rakesh yadav jella'))