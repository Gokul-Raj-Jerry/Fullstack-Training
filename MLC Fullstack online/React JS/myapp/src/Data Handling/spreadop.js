// Spread syntax (...)

/* function sum(x, y, z) {
  return x + y + z;
}
const numbers = [1, 2, 3];
console.log(sum(...numbers));
 */

/* function myData(x, y, ...z) {
  console.log(x);
  console.log(y);
  console.log(z);
  console.log(z.length);
} */
// myData("john", "peter", "james", "harrys");

let myData1 = ["john", "peter", "james", "harrys"];
let myData2 = ["Hello", "World", ...myData1];
console.log(myData2);

const newData = [...myData2];
console.log(newData);
