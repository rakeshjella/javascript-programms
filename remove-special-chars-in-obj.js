let obj = {s1:'@', s2:'hi',s3:{s4:'#'}}
function rs(obj){
    for(let key in obj){
        let value= obj[key];
        if(typeof value === 'object'){
            rs(value)
        } else{
            if(value === '@' || value === '#'){
                obj[key] = ''
            }
        }
    }
    return obj
}

console.log(rs(obj))
//{ s1: '', s2: 'hi', s3: { s4: '' } }


let arrObj = [1, [2, '#'], [3, '@']];

function rsa(arr) {
    for (let i = 0; i < arr.length; i++) {
        let value = arr[i];
        if (Array.isArray(value)) {
            rsa(value); // recursive call
        } else {
            if (value === '@' || value === '#') {
                arr[i] = '';
            }
        }
    }
    return arr;
}

console.log(rsa(arrObj));
//[1, [2, ''], [3, '']]