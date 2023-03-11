const express = require("express");

const app = express()

app.get('/', (req, res) => {
    res.send(`<h1>Root Testing</h1>`)
});

app.use('/user', require('./Router/userRouter.js'))
app.use('/product', require('./Router/productRouter'))


app.listen(5000, (err) => {
    if (err) throw err
    console.log(`Server is Running ${5000}`);
})












/* import Express from "express";
import dotenv from "dotenv"
import mongoose from "mongoose";

const app = Express()
dotenv.config({ path: "./config/config.env" })


app.get("/", (req, res) => {
    res.send('Root Request')
})

app.listen(process.env.PORT, (err) => {
    if (err) throw err
    console.log(`Server Running on Port Number : ${5000}`);
})


mongoose.connect(process.env.MongoDB_Local)
    .then((res) => { console.log('MongoDB connection successfull') })
    .catch((err) => { if (err) throw err }) */