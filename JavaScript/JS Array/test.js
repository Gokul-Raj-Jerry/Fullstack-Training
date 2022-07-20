/* function add(a, b, c, d=20) {
    console.log(a+b+c+d);
}
add(10)
add(10,20,30)
add(10,20,30,10)
 */

let names = ["Rahul", "Sonia", "Priyanka", "Modi"]
for (name of names) {
    console.log(name);
}



function add(a, b, c, d = 20) {
    console.log(a + b + c + d);
}
add(1,2,3)
add(1,2,3,4)