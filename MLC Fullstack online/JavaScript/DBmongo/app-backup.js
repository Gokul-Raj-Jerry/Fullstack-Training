import express from 'express'
import dotenv from 'dotenv'


const app = express()
dotenv.config({ path: './config/config.env' })

app.get('/', (req, res) => {
    res.send('<h1>Testing</h1>')
})
//user
app.get('/user', (req, res) => {
    res.send('<h1>user</h1>')
})
//user Login
app.get('/user/login', (req, res) => {
    res.send('<h1>user login</h1>')
})
//user Regestration
app.get('/user/reg', (req, res) => {
    res.send('<h1>user regestration</h1>')
})





app.listen(process.env.PORT, (err) => {
    console.log(process.env.PORT);
    if (err) throw err;
    console.log(`Server is Running on PORT`)
})

/*
how to read application configuration env variables

1. install dotenv
2. import dotenv
3. provide your configuration path
dotenv.config({ path: './config/config.env' })
4. Call as process.env.PORT
*/


// post data can be check only in insomania or postman tool