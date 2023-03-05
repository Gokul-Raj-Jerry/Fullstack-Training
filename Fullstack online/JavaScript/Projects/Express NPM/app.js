import express from 'express'

const app = express()
// initiallise express app

const PORT = 8000;

/* 
API URL: localhost:8000
Method: GET
Fields: NOT Required
Access Type: Public
 */
/* app.get('/', (req, res) => {
    res.send('Root response')
}); */

/* 
API URL: localhost:8000/emp
Method: GET
Fields: NOT Required
Access Type: Public
 */
app.get('/emp', (req, res) => {
    res.send('emp response')
});

/* 
API URL: localhost:8000/login
Method: POST
Fields: Email, Password
Access Type: Public
 */
app.post('/', (req, res) => {
    res.send('Login Successful')
});
app.get('/users', (req, res) => {
       let users = [
           {
               "id": 1,
               "name": "Leanne Graham",
               "username": "Bret",
               "email": "Sincere@april.biz",
               "address": {
                   "street": "Kulas Light",
                   "suite": "Apt. 556",
                   "city": "Gwenborough",
                   "zipcode": "92998-3874",
                   "geo": {
                       "lat": "-37.3159",
                       "lng": "81.1496"
                   }
               },
               "phone": "1-770-736-8031 x56442",
               "website": "hildegard.org",
               "company": {
                   "name": "Romaguera-Crona",
                   "catchPhrase": "Multi-layered client-server neural-net",
                   "bs": "harness real-time e-markets"
               }
           },
       ]
       res.json(users)
})



// server listen to PORT
app.listen(8000, (err) => {
    if (err) throw err;
})
