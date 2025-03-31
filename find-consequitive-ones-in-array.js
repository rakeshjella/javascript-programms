function maxConsecutiveOnes(arr) {
    let maxCount = 0; // Stores max consecutive 1s found
    let currentCount = 0; // Counts current consecutive 1s

    for (let num of arr) {
        if (num === 1) {
            currentCount++; // Increase count if the number is 1
            maxCount = Math.max(maxCount, currentCount); // Update max count
        } else {
            currentCount = 0; // Reset count if the number is not 1
        }
    }

    return maxCount;
}

let arr = [1, 2, 1, 1, 3, 1, 1, 1, 4, 1111];
console.log(maxConsecutiveOnes(arr)); // Output: 3
