let arr = [1,4,2,8,7];
function findMax(arr){
    let max =arr[0];
    for(var i=1;i<arr.length;i++){
        if(arr[i] > max){
            max=arr[i]
        }
    }
    return max;
}

console.log(findMax(arr))