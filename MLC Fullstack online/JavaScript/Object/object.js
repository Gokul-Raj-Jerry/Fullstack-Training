/* let empName = 'john';
let empAge = 18; */

// Object - multiple value is stored
// Key : value pair // properties //

// let employee = new Object()  // object creation

let emp = {
    ename: 'John',
    age: 18,
    email: 'john@gmail.com'

}

/* console.log(flights);
console.log(flights.flightName);
console.log(flights.price); */

// Lopping // While Loop or for Loop
/* for (i = 0, i < 10, i++ ) { } */

// Simple Loops // for of / for in 
// Data in Key : value // for in loop
// Data in Index based // for of 

let flights = {
    flightName: 'Indigo',
    departuretime: '7AM',
    arrivaltime: '8:45',
    price: 6000
}
for (let x in flights) {
    //    console.log(x); // key
    console.log(flights[x]); // value
}