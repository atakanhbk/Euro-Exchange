async function getData(url) {
  
        const response = await fetch(url);
        const data = await response.json();

        return data;
    

  
}

getData("https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_oxBwKqWWamYRQhQEDQYNlLhaaTwwjfLWAoX2nL3c")
.then(response => console.log(response))
.catch(err => console.log(err));