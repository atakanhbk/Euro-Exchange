// async function test(data) {
//     let promise = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("It is a value ...");
//         }, 5000);
//     });
//     let response = await promise;

//     return promise;

// }

// test("Merhaba").then(response => console.log(response));

async function testData(data) {
    let promise = new Promise((resolve,reject) => {
        setTimeout(() => {
            if (typeof data === "string") {
                resolve("This data is string");
            }
            else{
                reject("Please enter string value");
            }
        },5000)
    })

    const response = await promise;

    return response;
}


testData(21).then(data => console.log(data))
.catch(err => console.log(err));