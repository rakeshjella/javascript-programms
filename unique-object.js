function unqObj(arr){
    let unqNameObj = new Set();

    return arr.filter(obj => {
        if(unqNameObj.has(obj.name)){
            return false
        }
        else{
            unqNameObj.add(obj.name)
            return true;
        }
    })
}

let arrObj = [ {name:'rak'},{name:'raj'},{name:'rak'}]
console.log(unqObj(arrObj))

//o/p [ { name: 'rak' }, { name: 'raj' } ]
