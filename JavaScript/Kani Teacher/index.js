/* // map method - executes the function on each element in an array and returns a new array.

const a = [1, 2, 3, 4, 5];
const b = a.map((num) => {
    return num * 2
});
console.log(b);

//forEach method - executes the function on each element in an array. DOESN'T RETURN A NEW ARRAY.

const numbers = [1, 2, 3, 4, 5];
const result = [];
a.forEach((num) => {
    result.push(num * 2)
})
console.log(result);

//filter method - returns the element of an array that meet the condition specified in a callback function.

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const filteredNumbers = num.filter((element) => {
    return (element % 2 == 0)
})
console.log(filteredNumbers);

// reduce - reduces the array into a single value

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const reducedArray = array.reduce((prevValue, curValue) => {
    return prevValue + curValue
}, 0);
console.log(reducedArray); */

//event handling

/* const onClickHandler = () => {
    console.log("Button is clicked");
}

<button onClick={onClickHandler}>Click Me</button> */

// push method - Adds element at the end of an array

// unshift - Adds element at the end of the array

//pop - Removes last element in an array

// shift - Removes element in the beginning of the array

// slice() - selects a section in an array

/* const a = [ 10, 20, 30, 40, 50];
const b = a.slice(0,3);
console.log(b);
const c = a.slice(-3, -1);
console.log(c);
 */
//splice() - Removes elements from an array and if necessary inserts new data


