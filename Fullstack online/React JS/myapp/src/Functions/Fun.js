/* let add = (a, b, c) => {
    return a + b + c
} */

// important to use back tick `${}`
/* let getScoreTest = function (name, score = 0) {
console.log(name + score);
console.log(`Name: ${name} 
score: ${score}`);
};
getScoreTest("Tom"); */

// ES6  //ES2015
// Arrow Function
/* let myFun = () => {    // with out parameter
console.log("Arrow Function");
};

let myFunc = (a, b, c) => {  // with parameter
  return a * b * c;
};

let myFunct = (a) => { // w
  return a * a;
};

var myFuncti = (a) => a * a; // new arrow funtion */

// Scope
// funtion scope vs block scope
/* var myname = "Jerry"; // global
let add = () => {
  let myname = "Inside function Tom"; // local
  console.log(myname);
};
console.log(myname);
add();
 */

// Block scope =

// if (true) {
//   var myCourse1 = "React"; // var can be access block inside and outside
//   let myCourse2 = "HTML"; // let only access inside block
//   var myCourse3 = "JS"; //
//   console.log(myCourse1);
//   console.log(myCourse2);
//   console.log(myCourse3);
//   // var vs let
//   /* let myCourse2 = "MERN"; // let let redeclation & reassign is not possible
//   console.log(myCourse2); */
// /*   var myCourse1 = "MERN"; // // var had no scope. and redeclation is possible, reassign is possible
//   console.log(myCourse1); */
// }
// console.log(myCourse1); // var can be access outside and inside the block


