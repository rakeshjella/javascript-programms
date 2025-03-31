let str ="rakeshjellayadav";

function maxChar(str){
    let mostRepated = '';
    let maxCount = 0;
    let charCount = {};
    let splitStr = str.split('');
    //count the freq of each char
    splitStr.forEach(char => {
        charCount[char] = (charCount[char] || 0 ) + 1
    })

    for(let char in charCount) {
        if(charCount[char] > maxCount) {
            maxCount = charCount[char];
            mostRepated = char
        }
    }

    return mostRepated;
}

// a