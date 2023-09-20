class Request {
    constructor() {
        this.xhr = new XMLHttpRequest();
    }

    get(url, callback) {


        this.xhr.open("GET", url);

        this.xhr.onload = function () {
            if (this.status === 200) {


                callback(null, this.responseText);
            }
            else {
                callback("ERROR CAN FIND !!!", null);
            }
        }


        this.xhr.send();
    }

    post(url, data, callback) {
        this.xhr.open("POST", url);

        this.xhr.setRequestHeader("Content-type","application/json");
        this.xhr.onload = function () {
            if (this.status === 201) {
                callback(null,this.responseText);
            }
            else{
                callback("ERROR CAN FIND !!!",null);
            }
        }

        this.xhr.send(JSON.stringify(data));    
    }
}

const request = new Request();

// request.get("https://jsonplaceholder.typicode.com/albums/50", function (err, response) {
//     if (err === null) {
//         console.log(response);
//     }
//     else {
//         console.log(err);
//     }
// });

request.post("https://jsonplaceholder.typicode.com/albums",{userId:2,title:"Thriller"} ,function (err, album) {
    if (err === null) {
        console.log(album);
        request.get("https://jsonplaceholder.typicode.com/albums",function (err,response) {
            console.log(response);
        });
    }
    else {
        console.log(err);
    }
});