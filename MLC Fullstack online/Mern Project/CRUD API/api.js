const express = require('express');
const app = express();
const port = 3000;

const productRouter = require('./API Contoller/productController');
const customerRouter = require('./API Contoller/customerController');


app.use('/products', productRouter);
app.use('/customers', customerRouter);


// Server listening on port 3000 
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});