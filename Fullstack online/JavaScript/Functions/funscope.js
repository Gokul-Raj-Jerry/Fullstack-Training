let userName = 'Thepori therumugam' // global variable

function Login() {
    userName = 'kumar' // local variable
    console.log(userName); // local first priority
}
Login()