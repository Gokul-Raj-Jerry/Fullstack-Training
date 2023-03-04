// Different way to create API data without promise 
// simple method with async is promise

async function myUser(endpoint) {
    const res = await fetch(endpoint)
    if (!res.ok) {
        throw new Error(res.status); // 404 error
    }
    const data = await res.json();
    return data;
}

myUser('https://jsonplaceholder.typicode.com/users')
    .then(data => {
        console.log(data.map(user => user.website));
    })
    .catch(err => console.log('Error problem in server', err.message))
