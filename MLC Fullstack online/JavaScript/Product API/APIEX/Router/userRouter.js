const express = require("express");
const router = express.Router()

/* Name : http://localhost:5000 */
router.get('/', (req, res) => {
    res.send(`<h1>User Router testing</h1>`)
})

/* Name : http://localhost:5000/user/login */
router.post('/login', (req, res) => {
    // read form data // body dat
    // let { email, password } = req.body;
    res.send(`<h1>User Login</h1>`)
})

/* Name : http://localhost:5000/user/reg */
router.post('/reg', (req, res) => {
    res.send(`<h1>Regestration Login</h1>`)
})

/* Name : http://localhost:5000/user/alluser */
router.get('/alluser', (req, res) => {
    res.send(`<h1>All User Login</h1>`)
})
