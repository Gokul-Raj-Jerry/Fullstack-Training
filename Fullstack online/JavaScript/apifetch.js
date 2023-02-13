function myreq() {
    fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'GET'
    })
        .then(response => response.json())
        .then(jsonData => { console.log(jsonData); })
        .catch(err => { console.log(err); })
}

function iddata() {
    fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'GET'
    })
        .then(response => response.json())
        .then(response => response.map(user => user.id))
        .then(ids => console.log(ids))


}