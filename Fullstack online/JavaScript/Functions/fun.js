let userName = 'Jerry'
console.log(userName);

function info() {
    var myChild = 'Samantha'
    var gender = 'female'

    if (gender === 'male') {
        console.log(myChild + 'is my son');
    }
    else if (gender === 'female') {
        console.log(myChild + 'is my daughter');
    } else {
        console.log(myChild + 'is other');
    }
    /* console.log("loading"); */
}

function err() {
    console.log("not loading");
}
