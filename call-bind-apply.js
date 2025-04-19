let obj = {
    name:'jella',
    greet: function(city,zip) {
        console.log(`${this.name} from ${city} - ${zip}`)
    }
}

let person1 = {
    name:'rakesh'
}

obj.greet.call(person1,'hyderbad','501505')
//rakesh from hyderbad - 501505

let person2 = {
    name:'suhas'
}
obj.greet.apply(person2,['delhi','500001'])
// suhas from delhi - 500001


let person3 = {
    name: 'swetha'
}

let applyMethd = obj.greet.bind(person3,'PC','501')

applyMethd()
//swetha from PC - 501