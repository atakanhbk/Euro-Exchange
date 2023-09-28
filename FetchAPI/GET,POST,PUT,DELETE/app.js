class Response {
    get(url) {

        return new Promise((resolve, reject) => {
            fetch(url)
                .then(response => response.json())
                .then(data => resolve(data))
                .catch(err => reject(err));
        });

    }

    post(url, data) {

        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                }
            })
                .then(response => response.json())
                .then(data => resolve(data))
                .catch(err => reject(err));
        })

    }

    put(url, data) {

        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'PUT',
                body: JSON.stringify(data),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                }
            })
                .then(response => response.json())
                .then(data => resolve(data))
                .catch(err => reject(err));
        })

    }

    delete() {
        return new Promise((resolve, reject) => {
            fetch('https://jsonplaceholder.typicode.com/albums/1', {
                method: 'DELETE',
            })
            .then(response => resolve("Data process has succeed !!"))
            .catch(err => reject("Data process has failed !!!"));
        });
    }

}

let request = new Response();
// let albums;

// request.get("https://jsonplaceholder.typicode.com/albums")
//     .then(albums => console.log(albums))
//     .catch(err => console.log(err));


// request.post("https://jsonplaceholder.typicode.com/albums",{userId:1,title:"Atakan Hobek"})
// .then(newAlbum => console.log(newAlbum))
// .catch(err => console.log(err));

// request.put("https://jsonplaceholder.typicode.com/albums/1", { userId: 1, title: "It has changed !!!" })
//     .then(firstAlbum => console.log(firstAlbum))
//     .catch(err => console.log(err));

request.delete("https://jsonplaceholder.typicode.com/albums/1")
.then(response => console.log(response))
.catch(err => console.log(err));