const fs = require('fs')

// reading the synchronous
let data = fs.readFileSync('content.txt', 'utf-8');
console.log(data);

// reading a asynchronous means call back

/* fs.readFile('content.txt', 'utf-8', (error, newdata) => {
    fs.writeFile('one.txt', newdata, (err) => {
        if (err) throw err;
        console.log('Writing file Successfull');
    })
}) */