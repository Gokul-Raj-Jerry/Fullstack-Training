// var vs let
// var is global scope
// let is local scope

// Var Redeclaration is possible
// Let Redeclaration is not possible

/* let x = 10; // global variable
console.log(x);

if (x == 10) { // contition true
    let x = 20; // local variable
    console.log(x);
}
console.log(x); // var declaration outsite if condition x = 20 */


// var output 10 20 20
// let output 10 20 20



/* var a = 10;
console.log(a);
var a; // Var Redeclaration is possible

let b = 20;
console.log(b);
let b = 30; // Let Redeclaration is not possible */



/* // const 
const website = 'www.google.com'
console.log(website);
website = 'www.mozila.com' */

/* // use let in for loops 
for (let i = 0; i < 5; i++) {
    setTimeout(() => {
        console.log(i);
    }, 3000)
} */