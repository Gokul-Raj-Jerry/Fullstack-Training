// Complete JavaScript – Arrays

// 1. How to Create Arrays in JavaScript.

const cars = ["RR", "TATA", "BMW", [24, 5, 2, 3], { consumer: 101, name: "sago", sal: 1045000 }, null, null, undefined, true, false]
/* console.log(typeof (cars)); */   // datatype   non primitive object
/* console.log(cars.length);  */  // lenth of array
/* console.log(cars[0]);  
console.log(cars[1]);
console.log(cars[2]);
console.log(cars[3]);
console.log(cars[4]);
console.log(cars[5]);
console.log(cars[6]);
console.log(cars[7]);
console.log(cars[8]);
 */

// **** CRUD ****
/* console.log(cars); */  // create
/* console.log(cars); */ //  Read
console.log(cars[0]=['Rolls Royce']);  // update
/* delete(cars[0]); */ //  Delete



/* for (i = 0; i <= cars.length - 1; i++) {    // iterative for loop
    console.log(cars[i]);
}
 */


// for ( of "array name") used only for Array
/* for (brand of cars) {               // for(  of array name) is for array concept 
    console.log(brand);
} */