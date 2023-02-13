// Objects - stote (key value)
// array - store ()

// object & array
//  how to create ?
// How to Insert data (values)
// How to access data
// How to populate data (loop)
// How to delete

/* let students = [function add() {
    return 'hi i am array'
}, 'kiran', 'sago', 'jaggu', [1, 2, 3], { name: 'kiran' }, 'kiran', 123, true]
console.log(students); */


// push() - add last data
// pop() - remove last data
// shift() - remove first data
// unshift() - add first data

/* let employee = ['kiran'];
//console.log(employee);
employee[2] = 'kumar' // insert the item
//console.log(employee);
employee.push('sago') // push() data at last of array
//console.log(employee);
employee.pop()           // pop() remove last element
//console.log(employee);
employee.shift()   // remove first element
//console.log(employee);
employee.unshift('praveen')
//console.log(employee);

console.log(employee.length);


// for ( x of )
for (let mydata of employee) {
    console.log(mydata);
} */


// forEach() / morder array system
/* array = ['a', 'b', 'c', 'd', 'e']
array.forEach((index, item) => {
    console.log(index, item);
}); */


// filter method
/* let age = [7, 8, 9, 20, 5, 3, 6]

let mylimit = age.filter(agenum => {
    return agenum > 5
});
console.log(mylimit); */


// Filter Example
/* let employee = [
    { name: 'kiran', skill: 'fullstack' },
    { name: 'sago', skill: 'python' },
    { name: 'jaggu', skill: 'web' },
    { name: 'nara', skill: 'graphic' },
    { name: 'shima', skill: 'web' },
    { name: 'reddy', skill: 'software' }
]

let mydeveloper = employee.filter(dev => {
    return dev.skill == 'Web'
})
console.log(mydeveloper); */


// Find - return a single eleement
/* let employee = [
    { name: 'kiran', skill: 'fullstack' },
    { name: 'sago', skill: 'python' },
    { name: 'jaggu', skill: 'web' },
    { name: 'nara', skill: 'graphic' },
    { name: 'shima', skill: 'web' },
    { name: 'reddy', skill: 'software' }
]

let mydeveloper = employee.find(dev => {
    return dev.skill == 'web'
})
console.log(mydeveloper); */


// Find Indexof()
/* let mydata = ['AWS', 'AZURE', 'GCP', 'ALIBABA']

console.log(mydata.includes('GCP'));
console.log(mydata.indexOf('GCP')); */


// map() will return new arry
/* let mymap = ['jaggu', 'kiarn', 'sujith', 'kumar']

let x = mymap.map((friends) => {
    return 'My friends name: ' + friends
})
console.log(x); */



/* const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((number) => number * 2);
console.log(doubled); */