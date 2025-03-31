let arr = [1,2,3,1,2,4,5,2]

function maxChar(arr){
    let mostRepated = '';
    let maxCount = 0;
    let charCount = {};

    for(let num of arr) {
        charCount[num] = (charCount[num] || 0) + 1;
        if(charCount[num] > maxCount) {
            maxCount = charCount[num];
            mostRepated = num
        }
    }

    return mostRepated;
}

console.log(maxChar(arr))