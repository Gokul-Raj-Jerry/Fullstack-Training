import express from 'express'
import dotenv from 'dotenv'


const app = express()
dotenv.config({ path: './config/config.env' })

app.get('/', (req, res) => {
    res.send('Hello Chitty the Robot')
})
app.post('/', (req, res) => {
    res.send('Speed 1 terabyte, memory 1 getabyte')
})
// post data can be check only in insomania or postman tool

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


