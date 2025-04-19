let obj = {name:'rak', age:20, add:'hyd'}
let numObj = {};
let sObj = {}
for(let key in obj){
    if(typeof obj[key] === 'number'){
        numObj[key] = obj[key]
    } else{
        sObj[key] = obj[key]
    }
}

console.log(numObj) //{ age: 20 }
console.log(sObj) //{ name: 'rak', add: 'hyd' }


