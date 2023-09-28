function getData(url) {
    const xhr = new XMLHttpRequest();


    xhr.onload = ()=> {
        if (xhr.readyState == 4 && xhr.status == 200) {
           // Typical action to be performed when the document is ready:
           const getDataAsJson = xhr.responseText;
        
           console.log(JSON.parse(xhr.responseText)[0].salary);
        }
    };
    xhr.open("GET",url);
    
    xhr.send();
}

getData("example.json");