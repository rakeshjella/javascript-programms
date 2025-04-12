
// Feature	    forEach	                                     map
// Returns	    undefined	                                 New array
// Used for	    Side effects, calling api,	logging          Data transformation
// Chainable    ❌ No	                                    ✅ Yes


const arr = [1,2,3]

let mapRes = arr.map((item,index,selfArr) => item*2)
console.log(mapRes) // [2,4,6]

let forEachRes = arr.forEach((item,index,selfArr) => item*2)
console.log(forEachRes) // undefined

let forEachRes2 =  arr.forEach((item,index) => {
    arr[index] = item+2 
})

console.log(forEachRes2) // undefined

let forEachRes3 =  arr.forEach((ar,index) => {
    arr[index] = ar+2 
})

console.log(forEachRes3) // undefined // return  undefined
console.log(arr) //[ 3, 4, 5 ] modifes orginal array

// return name of student

let student = [
    {name:'rak', rollnumber:12,marks:35},
    {name:'raj', rollnumber:34,marks:65},
    {name:'ram', rollnumber:1,marks:85}
]

let names = [];
for (let index = 0; index < student.length; index++) {
   names.push(student[index].name.toUpperCase())
    
}
console.log(names)

let stMap = student.map((s) => s.name.toUpperCase())
console.log(stMap)

//return whose marks > 60

let sFil = student.filter(s => s.marks > 60)
console.log(sFil)

// sum marks

let sRed = student.reduce((acc,cur) => acc + cur.marks , 0);
console.log(sRed)