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