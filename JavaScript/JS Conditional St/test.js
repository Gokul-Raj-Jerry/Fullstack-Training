// JavaScript Conditional Statement Assignments 

// 1. Write a program to check if a number is divisible by 7 or not?

let q = 21
if (q % 7 == 0) {
    console.log("Divisible");
}
else {
    console.log("Not Divisible");
}

// 2. Write a program to check if a number is multiple of 3 or not?

let w = 9
if (w % 3 == 0) {
    console.log("Yes Divisible");
}
else {
    console.log("Not Divisible");
}

// 3. Write a program to check if a number is positive or not?

let e = -5
if (e < 0 == 0) {
    console.log("Positive");
}
else {
    console.log("Negative");
}

// 4. Write a program to check if a number is having 4 at the unit's place or not?

/* let r = */

// 5. Write a program to check if a number is 10-digit numbers or not?

let t = 9876543810;
if (t.toString().length == 10) {
    console.log("Accepted");
}
else {
    console.log("Not Accepted");
}

// 6. Write a program to print even or odd for a given number?

let y = 652
if (y % 2 == 0) {
    console.log("Even");
}
else {
    console.log("Odd");
}

// 7. Write a program to print the greatest number in given two numbers?

let u = 5
let i = 8
if (u > i) {
    console.log(u);
}
else {
    console.log(i);
}

// 8. Write a program to print the least number given two numbers?

let o = 1
let p = 2
if (o < p) {
    console.log(o);
}
else {
    console.log(p);
}

// 9. Write a program to print the greatest number in given three numbers?

let a = 54
let s = 45
let d = 87
if (a > s && a > d) {
    console.log("a is Greater");
}
else if (s > a && s > d) {
    console.log("s is Greater");
}
else {
    console.log("d is Greater");
}

// 10. Write a program to print the least number in given three numbers?

let f = 54
let g = 45
let h = 87
if (f > g && f > h) {
    console.log("f is least");
}
else if (g > f && g > h) {
    console.log("g is least");
}
else {
    console.log("h is least");
}

// 11. Write a program to print the given 3 numbers in ascending orders?

let j=[9,5,7,4,6,2,1]
j.sort()
console.log(j);

// 12. Write a program to print the given 3 numbers in descending orders?

let k=[2,5,1,4,8,9,7]
k.sort().reverse()
console.log(k);

// 13. JavaScript Program to find largest of Three Numbers?

let l = 54
let z = 45
let x = 87
if (l > z && l > x) {
    console.log("l is largest");
}
else if (z > l && z > x) {``
    console.log("z is largest");
}
else {
    console.log("x is largest");
}

