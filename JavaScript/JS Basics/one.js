/* 2 types of datatype 
Primitive - Holding Single Value & NON-Primitive - Holding multiple value */

true, false						// 1. Boolean
null 							// 2. Null
undefined 						// 3. Undefined
1, 4, 7, 231, 51, 11, 9			// 4. Number
9007199254740991n				// 5. BigInt
'Hello', 'World', 'Uzbekistan'	// 6. String
let sym1 = Symbol()				// 7. Symbol
{ a: 123 } [1]					// 8. Objects - NON-Primitive (multiple values)

var price = 99
var product_Rating = 4.9
var brand = "LP"
var is_Avial = true
var discount
var size = [21, 22, 23, 24]
var product_Details= { Product_Name:"Iphone", price:$50000}

console.log(typeof price); // number
console.log(typeof product_Rating); // number
console.log(typeof brand); // string
console.log(typeof is_Avial); // boolean
console.log(typeof discount); // undefind
console.log(typeof size); // array object
console.log(typeof product_Details); // object

let a = 20
let b = 30
console.log(a+b);

/* 
JS Operators 
==	equal to
===	equal value and equal type
!=	not equal
!==	not equal value or not equal type
>	greater than
<	less than
>=	greater than or equal to
<=	less than or equal to
?	ternary operator
 */


/*  */

// =  assignment operator 
var x = 2


// +  addition operator
2 + 3 = 5


// -  subtraction operator
2 - 3 = -1


// *  multiplicative operator
2 * 3 = 6


// /  division operator
3 / 2 = 1.5


// %  modulus operator
3 % 2 = 1


// ++  increment operator
var x = 2
x++
// x now equals 3 (x = x + 1 in literal notation)


// --  decrement operator
var x = 3
x--
// x now equals 2 (x = x - 1 in literal notation)


// +=  additive reassignment operator
var x = 2
x += 3
// x now equals 5 (x = x + 3 in literal notation)


// -=  subtractive reassignment operator
var x = 3
x -= 2
// x now equals 1 (x = x - 2 in literal notation)


// *=  multiplicative reassignment operator
var x = 3
x *= 2
// x now equals 6 (x = x * 2 in literal notation)


// /=  division reassignment operator
x = 3
x /= 2
// x now equals 1.5 (x = x / 2 in literal notation)


// %=  modulus reassignment operator
x = 3
x %= 2
// x now equals 1 (x = x % 2 in literal notation)


// ==  logical comparison operator
2 == 2 // Returns true
2 == "2" // Returns true
2 == 3 // Returns false


// ===  logical strict comparison operator
2 === 2 // Returns true
2 === "2" // Returns false
2 === 3 // Returns false


// !=  logical not equal comparison operator
2 != 3 // Returns true
2 != 2 // Returns false
2 != "2" // Returns false


// !==  logical not equal strict comparison operator
2 !== 3 // Returns true
2 !== 2 // Returns false
2 !== "2" // Returns true


//  <  logical less than comparison operator
2 < 3 // Returns true
3 < 2 // Returns false


//  >  logical greater than comparison operator
3 > 2 // Returns true
2 > 3 // Returns false
3 > 3 // Returns false


//  <=  logical less than or equal to comparison operator
2 <= 3 // Returns true
3 <= 3 // Returns true
3 <= 2 // Returns false


//  >= logical less than or equal to comparison operator
3 >= 2 // Returns true
3 >= 3 // Returns true
2 >= 3 // Returns false


//  || logical or operator
x = 3
(x == 3 || x == 2) // Returns true
(x == 2 || x == 1) // Returns false


//  && logical and operator
x = 2
y = 3
(x == 2 && y == 3) // Returns true
(x == 2 && y == 4) // Returns false