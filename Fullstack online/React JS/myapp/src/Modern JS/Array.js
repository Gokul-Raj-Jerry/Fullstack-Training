let users = [
  "Tom",
  "Jerry",
  "popoye",
  21,
  { name: "Ferb" },
  function add(params) {},
];

for (let iterator of users) {
  console.log(iterator);
}

// If data is array forEach() method can be used
const myArray = [1, 2, 3, 4, 5];

myArray.forEach(function (element, index, array) {
  console.log("Element " + element + " at index " + index);
});


// Array - for ( of )

/* const myArray = [1, 2, 3, 4, 5];

for (let value of myArray) {
  console.log(value);
}
 */
