function pal(str) {
    for(var i=0;i<Math.floor(str.length/2);i++){
        if(str[i]!==str[str.length-1-i]){
            return false
        }
    }
    return true;
}

console.log(pal('racecar'))

// or

// function pal(str){
//     return  str === str.split('').reverse().join('')
//  }
 
//  console.log(pal('faf'))