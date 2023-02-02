const bcrypt = require('bcryptjs')
let userDetails = {
    name: 'Narashima',
    email: 'nara@123',
    password: 'psa123'
}
let newPassword = bcrypt.hashSync(userDetails.password, 10)
console.log(newPassword);

userDetails = { ...userDetails, password: newPassword };
console.log(userDetails);

if (bcrypt.compareSync('ps123', userDetails.password)) {
    console.log('password-matched');}
    else{
    console.log('password not match');
    } 