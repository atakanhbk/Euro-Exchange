function getTextFile() {
    fetch("example.txt")
    .then(response => response.text())
    .then(data => console.log(data))
    .catch(err => console.log(err));
}

function getJsonFile() {
    fetch("example.json")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.log(err));
}


function getExternalAPI() {
    fetch("https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_oxBwKqWWamYRQhQEDQYNlLhaaTwwjfLWAoX2nL3c")
    .then(response => response.json())
    .then(data => console.log(data.data.TRY))
    .catch(err => console.log(err));
}

getExternalAPI();
//getJsonFile ();