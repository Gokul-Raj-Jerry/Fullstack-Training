// 11. (Factors of 24 are 1, ,3, 4, 6, 12, 24)

const factors = 24
let i = 1
while (i <= factors) {
    if (factors % i == 0)
        console.log(i);
    i++;
}