// array of object examples
let arr = [{name:'rak',age:29},{name:'raj',age:20},{name:'ram',age:36}]

let names = arr.map(i => i.name)
console.log(names) //[ 'rak', 'raj', 'ram' ]

let incAge = arr.map(i => i.age+1)
console.log(incAge) //[ 30, 21, 37 ]

let namesObj = arr.map(i => ({name: i.name}))
console.log(namesObj) //[ { name: 'rak' }, { name: 'raj' }, { name: 'ram' } ]

//let sortByAge = arr.sort((a,b) => a.age-b.age)
//console.log(sortByAge)

for(var i=0;i<arr.length-1;i++) {
    for(var j=1;j<arr.length-1;j++){
        if(arr[i].age >arr[j].age){
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp
        }
    }
}
console.log('for loop sort', arr)
// for loop sort [
//     { name: 'raj', age: 20 },
//     { name: 'rak', age: 29 },
//     { name: 'ram', age: 36 }
//   ]

let incAgeWithObj = arr.map(i => ({name:i,age:i.age+1}))
console.log(incAge)
// [
//     { name: { name: 'rak', age: 29 }, age: 30 },
//     { name: { name: 'raj', age: 20 }, age: 21 },
//     { name: { name: 'ram', age: 36 }, age: 37 }
//   ]

let seniorAgePerson = arr.filter(i=>i.age>30)
console.log(seniorAgePerson)

// [ { name: 'ram', age: 36 } ]

// Add a new property to all objects (e.g., status: 'active').
for(var i=0;i<arr.length;i++){
    arr[i].status = 'active'
}

console.log(arr)
// [
//     { name: 'rak', age: 29, status: 'active' },
//     { name: 'raj', age: 20, status: 'active' },
//     { name: 'ram', age: 36, status: 'active' }
//   ]

let findByName = arr.filter(i => i.name === 'ram')
console.log(findByName)

// [ { name: 'ram', age: 36 } ]

let cityObj = [
    { name: 'A', city: 'X' },
    { name: 'B', city: 'Y' },
    { name: 'C', city: 'X' }
  ];
  
  let groupByCity = Object.groupBy(cityObj, myCallback);
  
  function myCallback({ city }) {
    return city === 'X' ? 'X' : 'Y';
  }
  let plainObj = Object.fromEntries(Object.entries(groupByCity));
  console.log(plainObj);

//   {
//     X: [ { name: 'A', city: 'X' }, { name: 'C', city: 'X' } ],
//     Y: [ { name: 'B', city: 'Y' } ]
//   }

// custom groupby
let grouped = {};

for (let i = 0; i < cityObj.length; i++) {
  let city = cityObj[i].city;
  if (!grouped[city]) {
    grouped[city] = [];
  }
  grouped[city].push(cityObj[i]);
}

console.log(grouped);

// merge two objects based on common property ex: id

let arr1 = [
    { id: 1, name: 'Rak' },
    { id: 2, name: 'Raj' }
  ];
  
  let arr2 = [
    { id: 1, city: 'Delhi' },
    { id: 2, city: 'Mumbai' }
  ];

  let merged = [];

for (let i = 0; i < arr1.length; i++) {
  let obj1 = arr1[i];
  let match = arr2.find(obj2 => obj2.id === obj1.id);
  if (match) {
    merged.push({ ...obj1, ...match });
  }
}

console.log(merged);

// [
//     { id: 1, name: 'Rak', city: 'Delhi' },
//     { id: 2, name: 'Raj', city: 'Mumbai' }
// ]

// Flatten nested array of objects
let arrF = [
    { name: 'A', skills: [ { name: 'JS' }, { name: 'HTML' } ] },
    { name: 'B', skills: [ { name: 'CSS' } ] }
  ];

let flattened = [];

for (let i = 0; i < arrF.length; i++) {
  let person = arrF[i];
  for (let j = 0; j < person.skills.length; j++) {
    flattened.push({
      name: person.name,
      skill: person.skills[j].name
    });
  }
}

console.log(flattened);

// [
//     { name: 'A', skill: 'JS' },
//     { name: 'A', skill: 'HTML' },
//     { name: 'B', skill: 'CSS' }
// ]

// ✅ flatMap() Version: ES6

 flattened = arrF.flatMap(person => 
    person.skills.map(skill => ({
      name: person.name,
      skill: skill.name
    }))
  );
  
  console.log(flattened);

//   flatMap() is a super handy method in JavaScript that combines map() + flat() in one go
let users = [
    { name: 'Alice', pets: ['dog', 'cat'] },
    { name: 'Bob', pets: ['fish'] }
  ];
  
  let result = users.flatMap(user =>
    user.pets.map(pet => ({ owner: user.name, pet }))
  );
  
  console.log(result);

//   [
//     { owner: 'Alice', pet: 'dog' },
//     { owner: 'Alice', pet: 'cat' },
//     { owner: 'Bob', pet: 'fish' }
//   ]
  