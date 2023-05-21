// Get Method

function myData() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(res => console.log(res))
        .catch(err => console.log(err))
}

function myName() {
    fetch('https://jsonplaceholder.typicode.com/users', { method: 'GET' })
        .then(res => res.json())
        .then(user => user.map(data => data.username))
        .then(data => { console.log(data) })
}

const mypost = {
    id: 1,
    title: 'Filpkart',
    body: 'Body of FilpKart'
} // JS Object

function mydpost() {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(mypost)
    })
        .then(res => res.json())
        .then(res => console.log(res));
}
