const express = require("express");
const router = express.Router();

// Mongodb connect
// const mongo = require('mongodb'); // import depency module
// const MongoClient = mongo.MongoClient;  // code to connect db
// const dbURL = "mongodb://localhost:27017";
// var db;

// MongoClient.connect(dbURL, (err, con) => {
//     if (err) console.log(err);
//     db = con.db("product");
// });

/* router.get('/productsapi', (req, res) => {
    //     res.send('Product API Working');
    db.collection("product").find().toArray((err, products) => {
        if (err) console.log(err);
        res.send(products);
    });
}); */


let products = [{
    "name": 101,
    "price": 100,
    "quantity": 10
}];


router.get('/', (req, res) => {
    res.send('Customer API Working!');
});

router.get('/productsapi', (req, res) => {
    res.send(products);
});


module.exports = router;