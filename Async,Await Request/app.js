class Response {
    async get(url) {

 

        const response = await fetch(url);

        const data = await response.json();

        return data;

    }

    async post(url, data) {

        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        })

        const responsedata = await response.json();

        return responsedata;

    }

    async put(url, data) {


        const response = await fetch(url, {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        })


        const responsedata = await response.json();

        return responsedata;
    }

    async delete() {
    

        const response = await fetch('https://jsonplaceholder.typicode.com/albums/1', {
            method: 'DELETE',
        })

  
        return "Data has deleted";
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

// request.delete("https://jsonplaceholder.typicode.com/albums/1")
//     .then(response => console.log(response))
//     .catch(err => console.log(err));