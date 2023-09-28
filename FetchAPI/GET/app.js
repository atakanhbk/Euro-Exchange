class Response {
    get(url) {

        return new Promise((resolve,reject) => {
            fetch(url)
        .then(response => response.json())
        .then(data => resolve(data))
        .catch(err => reject(err));
        });
        
    }

  
}

let request = new Response();
let albums;

request.get("https://jsonplaceholder.typicode.com/albums")
.then(albums => console.log(albums))
.catch(err => console.log(err));
