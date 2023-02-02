import express from 'express'
const app = express()

// var express = require('express')
// var app = express()

/* import path from 'path'
// we are initilizing express app
console.log(path.basename((req,res) => {
    res.send('Hello World')
})); */

// Basic routing 
// API URL: Local Host 
// Method: GET/PUT/POST/DEL 
// Fields: No Required 
// Access Type: Public o/r Private 

app.get('/', (req, res) => {
    console.log(req);
    res.send('Root Request')
})

app.get('/user', (req, res) => {
    res.send(`<h1>User Data</h1>`);
})

app.get('/jaggu', (req, res) => {
    res.send('Vanakam di mapla')
})

app.get('/employee', (req, res) => {
    res.send('Employee Data')
})

app.listen(1234, (err) => {
    if (err) throw err
    console.log("server is Running port#: 1234");
});

