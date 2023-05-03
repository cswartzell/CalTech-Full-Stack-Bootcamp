// //user promise ES5 style, 6 is arrow funciton
// var obj1 = new Promise(function (resolve, reject) {
//     // resolve("promise fullfilled")
//     reject("promise rejected")
// });

// // The dot notation here is interesting. catch ONLY gets called if the promise is rejected
// // But if resolved, then the catch doesnt trigger. I dont get it
// obj1.then(function (data) {
//     console.log("then called..."+data);
// }).catch(function (error) {
//     console.log("catch called..."+error);
// })


// https://fakestoreapi.com/products

// fetch("https://fakestoreapi.com/products").then(result=>console.log(result)).catch(error=>log(error));
//The first then receives all the API result, which includes a head etc.
//  the first then extracts the data and passing parsing it using json()
//When THATS done, it calls the second then
fetch("https://fakestoreapi.com/products").then(result => result.json()).then(result => console.log(result)).catch(error => log(error));
