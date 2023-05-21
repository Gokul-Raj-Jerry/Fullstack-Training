// Array data
const food = [
    { id: 1, name: "briyani", price: 500 },
    { id: 2, name: "Veg Briyani", price: 200 },
    { id: 3, name: "samba rice", price: 100 }
];
const abc = document.getElementById("abc");  // DOM method


food.forEach((items) => {
    abc.innerHTML += `
    <li>
    ${items.id}
    ${items.name}
    ${items.price}
    </li>
    `
})













/* food.forEach((item) => {
    abc.innerHTML += `
 <li>
 ${item.id}
 ${item.name}
 ${item.price} 
 </li>
    `;
});z
console.log(food); */


/* food.map((items) => {
    abc.innerHTML += `
    <li>
    ${items.id}
    ${items.name}
    ${items.price}
    </li>
    `
});
console.log(food); */


/* for (x of food) {
    console.log(x);
} */

