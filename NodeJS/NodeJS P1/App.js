
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"
import cors from "cors"
import morgan from 'morgan'

const app = express()
dotenv.config({ path: './config/confi' })
app.use((cors))
app.use(morgan('tiny'))   // http logger

// how to read form data
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// create route request
app.get('/', (req, resp) => {
    resp.send('<h1>Welcome to NodeJS App</h1>')
})

const hostname = process.env.HOST_NAME;
const port = process.env.PORT

app.listen(port, hostname, () => {
    console.log(`server is Running on http://${hostname}:${port}`);
});

































/* import express from 'express'
import morgan from 'morgan'
import chalk from 'chalk';

const app = express();


app.use(morgan('tiny'));

app.get("/", (req, res) => {
    res.send("Node JS with ES6")
})

app.put("/user", (req, res) => {
    res.send("Put me")
})


app.listen(8080, (err) => {
    if (err) throw err
    console.log(chalk.yellow.bgRed.bold('Hello world!'));
    console.log(`Server Running`);
    console.log(`${chalk.red(`Server Running...${8080}`)}`);
}) */