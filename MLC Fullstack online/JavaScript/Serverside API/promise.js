const mypost = {
    id: 1,
    title: 'Filpkart',
    body: 'Body of FilpKart'
} // JS Object

// promise
async function mydpost() {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(mypost)
    })
        .then(res => {
            if (res.ok) {
                return res.json();
            } else {
                return Promise.reject({ status: res.status, statusText: res.statusText });
            }
        })
        .then(res => console.log(res))
        .catch(err => console.log('Error, with Message', err.statusText));
}



