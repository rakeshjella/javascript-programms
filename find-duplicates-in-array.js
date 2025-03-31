let arr = [1,4,1,3,2,2,8,7];

function findDup(arr){
    let dup = [];
    let unq =[];
    for(var i=0; i<arr.length;i++){
        if(!unq.includes(arr[i])){
            unq.push(arr[i])
        }
        else{
            dup.push(arr[i])
        }
    }

    return dup
}

console.log(findDup(arr))