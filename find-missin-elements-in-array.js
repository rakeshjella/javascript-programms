let a = [1,2,3,7,8,9,10];
let miss = [];
for(var i=1;i<=a.length-1;i++){
    if(a.indexOf(i) === -1){
        miss.push(i)
    }
}
console.log(miss)
// [4,5,6]