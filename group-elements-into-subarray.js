
function group(arr,n){
    let res = [];
    for(var i=0;i<arr.length;i+=n){
        res.push(arr.slice(i,i+n))
    }

    return res;
}
let arrr=[1,2,3,4,5,6];
console.log(group(arrr,2))
// o/p [ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ] ]