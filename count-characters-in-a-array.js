let arr =['r', 'a','k','e','s','h']

function countArrChar(arr){
    let frqCount = {};
    for(var i=0;i<arr.length;i++){
        frqCount[arr[i]] = (frqCount[arr[i]] || 0 ) +1;
    }

    return frqCount;
}

console.log(countArrChar(arr))

// o/p
// { r: 1, a: 1, k: 1, e: 1, s: 1, h: 1 }