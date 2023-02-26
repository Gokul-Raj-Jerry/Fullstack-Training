// https://jsonplaceholder.typicode.com/users


function jdata() {
    fetch('https://jsonplaceholder.typicode.com/users', { method: 'GET' })
        .then(res => res.json())
        .then(jdata => console.log(jdata))
        .catch(err => console.log(err))
}

function uName() {
    fetch('https://jsonplaceholder.typicode.com/users', { method: 'GET' })
        .then(res => res.json())
        .then(jdata => jdata.map(data => data.username))
        .then(username => console.log(username))
        .catch(err => console.log(err))
}


const mypost = {
    title: 'Mechanical Monster',
    body: 'Brave Invaders',
    userId: 1
} // JS Object

const myData = {
    method: 'Post',
    body: JSON.stringify(mypost),
    headers: {
        'content-Type': 'application/json'
    }
} // Convert into JSON format

function myPost() {
    fetch('https://jsonplaceholder.typicode.com/posts', myData)
        .then(res => res.json())
        .then(res => console.log(res));
}














/* const mypost = {
    title: 'Mechanical Monster',
    body: 'Brave Invaders',
    userId: 1
} // JS Object

const myData = {
    method: 'Post',
    body: JSON.stringify(mypost),
    headers: {
        'content-Type': 'application/json'
    }
} // Convert into JSON format

function myPost() {
    fetch('https://jsonplaceholder.typicode.com/posts', myData)
        .then(res => res.json())
        .then(res => console.log(res));
}
 */