class Response {
    get(url) {
        fetch(url)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(err => console.log(err));
    }

  
}

let response = new Response();

response.get("https://jsonplaceholder.typicode.com/albums");

