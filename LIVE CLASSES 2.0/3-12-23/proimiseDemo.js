// user defined promis in ES5 style
var obj1 = new Promise(function (resolve, reject) {
    resolve("promise fulfilled")
})

obj1.then(function (data) {
    console.log("then called.." + data)
}).catch(function (error) {
    console.log("catch called..." + error)
}) 


//Ok. Thats neat. This is all it takes
fetch("https://fakestoreapi.com/products").then(result=>result.json()).then(result=>console.log(result)).catch(error=>console.log(error));