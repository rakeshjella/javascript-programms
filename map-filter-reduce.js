const arr = [1,2,3]

let res1 = arr.map((item,index,selfArr) => item*2)
console.log(res1)
// [ 2, 4, 6 ]
// pollyfill map
Array.prototype.myMap = function(cb){
    let temp =[];
    for (let i = 0; i < this.length; i++) {
        temp.push(cb(this[i], i, this))        
    }
    return temp
}
let res2 = arr.myMap((item,i,arr) => item*3)
console.log(res2) // [ 3, 6, 9 ]

// filter

let fres1 = arr.filter((item,index,arr) => {
    return item>1
})

console.log(fres1) // [ 2, 3 ]

// filter polyfill
Array.prototype.myFilter = function(cb){
    let temp =[];
    for (let i = 0; i < this.length; i++) {
        if(cb(this[i], i, this))
            temp.push(this[i])        
    }
    return temp
}

let fres2 = arr.myFilter((item,index,arr) => item>1)
console.log(fres2) // [ 2, 3 ]

// reduce
let red1 = arr.reduce((acc,cvalue) => acc+cvalue, 0)
console.log(red1) // 6

//arr.reduce((acc,cur, index, arr)=>{}, initialvalue)

Array.prototype.myReduce= function(cb, initialvalue){
    var accumulator = initialvalue;
    for (let i = 0; i < this.length; i++) {
        accumulator = accumulator ?  cb(accumulator, this[i], i, this) : this[i]; // if no initial value, it will take first array value     
    }
    return accumulator
}
let red2 = arr.reduce((acc,cvalue) => acc+cvalue, 0)
console.log(red2) // 6