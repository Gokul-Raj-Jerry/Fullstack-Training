// 14. Write a program to print the Fibonacci number series up to a given number


const num = 10;
let n1 = 0, n2 = 1, nextTerm;

for (let i = 1; i <= 10; i++) {
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}