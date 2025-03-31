let arr = [1,4,2,8,7];

function sortArr(arr){
    for(var i=0; i<arr.length;i++){
        for(var j=i;j<arr.length;j++){
            if(arr[i]>arr[j]){
                let temp = arr[i];
                arr[i] =arr[j];
                arr[j] = temp
            }
        }
    }
    return arr
}

console.log(sortArr(arr))


console.log(arr.sort((a,b) => a-b))