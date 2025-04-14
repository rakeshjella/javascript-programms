let arr = [1, 2, 4, 5];

let n = arr.length + 1; // Total count including the missing number
let expectedSum = (n * (n + 1)) / 2;
let actualSum = arr.reduce((acc, num) => acc + num, 0);

let missing = expectedSum - actualSum;
console.log("Missing number is:", missing);

// Missing number is: 3