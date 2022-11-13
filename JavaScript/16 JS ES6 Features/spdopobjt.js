const PersonalDetails = {
    name: 'Narasima Reddy',
    email: 'simanara@gmail.com',
    age: 30
}
const LoginDetails = {
    userName: 'Narasima',
    password: 123456,
    email: 'test@gmail.com',
}
const userDetails = {
    ...PersonalDetails,
    ...LoginDetails
}
console.log(userDetails);