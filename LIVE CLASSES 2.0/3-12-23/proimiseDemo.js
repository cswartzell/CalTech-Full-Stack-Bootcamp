// user defined promis in ES5 style
var obj1 = new Promise(function (resolve, reject) {
    resolve("promise fulfilled")
})

obj1.then(function (data) {
    console.log("then called.." + data)
}).catch(function (error) {
    console.log("catch called..." + error)
}) 