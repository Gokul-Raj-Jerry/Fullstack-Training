const express = require('express');
const router = express.Router();

let customers = [
    {
        "id": 1,
        "name": "Raj",
        "email": "raj@gmail.com"
    },
    {
        "id": 2,
        "name": "Rahul",
        "email": "rahul@gmail.com"
    },
    {
        "id": 3,
        "name": "Ramesh",
        "email": "ramesh@gmail.com"
    }
];

router.get('/', (req, res) => {
    res.send('Customer API Working!');
});

router.get('/customers', (req, res) => {
    res.send(customers);
});

module.exports = router;