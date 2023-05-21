// Selection to select HTML element using DOM methods

const heading = document.getElementById('head');;
console.log(heading);

const moblisting = document.getElementById('moblist');
console.log(moblisting);

console.log(moblisting.innerHTML);
moblisting.textContent = `<h1>This is my Inner HTML</h1>`