const jwt = require('jsonwebtoken')

//  user Login 
let user = {
    email: 'aatha@gmail.com',
    password: 'athe@123'
}
let payload = {
    id: user.email,
}

// server is generating the tocken 
let secretKey = 'ASDF'
let token = jwt.sign(payload, secretKey, { expiresIn: 60 * 60 })
console.log(token);

// how to verify the tocken
jwt.verify(token, secretKey, (err,newPayload)=>{
    if(err) throw err;
    console.log(newPayload);
})