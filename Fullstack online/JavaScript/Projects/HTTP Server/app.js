/* ====== create node.js server with core 'http' module ====== */
// dependencies
const http = require("http");

// PORT
const PORT = 3000;

// server create
const server = http.createServer((req, res) => {
    res.end(`<h1>Hello, HTTP Server.....</h1>`)
});

// server listen port
server.listen(PORT);

console.log(`Server is running on PORT: ${PORT}`);

// ======== Instructions ========
// save this as index.js
// you have to download and install node.js on your machine
// open terminal or command prompt
// type node index.js
// find your server at http://localhost:3000


// black backgroud issue
/* require('http')
    .createServer((req, res) => {
        res.end("Hello chitty")
    })
    .listen(8000) */