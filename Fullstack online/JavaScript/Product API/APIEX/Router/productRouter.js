const express = require("express");
const router = express.Router();

/* Name : http://localhost:5000/product */
router.get('/', (req, res) => {
    res.send(`<h1>Product Router Testing</h1>`)
})
/* Name : http://localhost:5000/product/alloy */
router.get('/alloy', (req, res) => {
    res.send(`<h1>Alloy Products</h1>`)
})
/* Name : http://localhost:5000/product/steel */
router.get('/steel', (req, res) => {
    res.send(`<h1>Steel Products</h1>`)
})
/* Name : http://localhost:5000/product/iron */
router.get('/iron', (req, res) => {
    res.send(`<h1>Iron Products</h1>`)
})

module.exports = router