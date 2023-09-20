document.getElementById("change").addEventListener("click",function () {

    const xhr = new XMLHttpRequest();

    xhr.onload = function () {
        
        if(this.status === 200){
            const response = JSON.parse(this.responseText);
            const rate = response.rates.TRY;
            const amount = Number(document.getElementById("amount").value);
            
            const result =  amount * rate
            document.getElementById("tl").value = result.toFixed(2);
         
        } 
      
    }

    xhr.open("GET","https://api.exchangerate.host/latest",true);

    xhr.send();

  
})