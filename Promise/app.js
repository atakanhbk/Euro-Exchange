function getData(data) {
  return new Promise(function (resolve,reject) {
    setTimeout(function () {
      
        if (typeof data === "string") {
         //Olumlu
         resolve(data);   
        }
        else{
            //Olumsuz
            reject(new Error("Lütfen String Bir Deger Girin !!!"));
        }
    },1000)
  });
}

getData(123)
.then(response => console.log(response))
.catch(err => console.error(err));