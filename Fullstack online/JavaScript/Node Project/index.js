

function myData() {
    fetch('http://localhost:3000/users', { method: 'GET' })
        .then(res => res.json())
        .then(jsondata => console.log(jsondata))
        .catch(err => console.log(err))
}

myData();