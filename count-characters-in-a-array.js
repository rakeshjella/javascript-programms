let arr =['r', 'a','k','e','s','h']

function countArrChar(arr){
    let frqCount = {};
    for(var i=0;i<arr.length;i++){
        frqCount[arr[i]] = (frqCount[arr[i]] || 0 ) +1;
    }

    return frqCount;
}

console.log(countArrChar(str))