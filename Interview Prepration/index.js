const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const reducedArray = array.reduce((prevValue, curValue) => {
    return prevValue + curValue
}, 0);
console.log(reducedArray);