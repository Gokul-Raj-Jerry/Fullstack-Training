// 10. Write a program Factors of 24 using while loop

const num = 24
let i = 1
while (i <= num) {
    if (num % i == 0)
        console.log(i);
    i++;
}