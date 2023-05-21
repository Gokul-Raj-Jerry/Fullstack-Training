const food = document.querySelector('.mylist');
console.log(food);

const mylis = document.querySelectorAll('ul li');
console.log(mylis);

const litms = document.querySelector('.mylist-item');
console.log(litms);

const ele = document.getElementById('mydiv');   // Selecting the div element
console.log(ele);
ele.style.backgroundColor = 'green'

const mybtn = document.querySelector('.btn');
const heading = document.querySelector('.heaing');

mybtn.onclick = () => {
    console.log("Accepted");
}

mybtn.onmouseover = () => {
    heading.style.backgroundColor = 'red';
}

mybtn.onmouseout = () => {
    heading.style.backgroundColor = 'blue';
}