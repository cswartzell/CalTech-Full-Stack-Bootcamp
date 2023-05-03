let isInternetEnabled = true;
let isGPSEnabled = true;

console.log("Can I navigate using Google Maps: " + (isInternetEnabled && isGPSEnabled));

let eWallet = 300;
let isCreditCardLinked = true;
console.log("Can I book a cab?: " + (eWallet > 0 || isCreditCardLinked));

console.log("Is Internet off? : " + !isInternetEnabled);

// Flow Control Tests

let test = true
if (test)
    console.log("if true");
else {
    console.log("Is false");
}


// Apparently switch runs the first match, THEN ALL THE REST
// So you NEED to break, unless you can use this to your advantage
let choice = "b"
switch (choice) {
    case "a": console.log("picked a");
        break;
    case "b": console.log("picked b");
        break;
    case "c": console.log("picked c");
        break;
}

let i = 0;
while (i < 3) {
    console.log("While " + i);
    i++
}

i = 0;
do {
    console.log("While " + i);
    i++
} while (i < 3)

//FOR..OF
let fruits = ['orange', 'apple', 'banana']
for (fruit of fruits) {
    console.log(fruit);
}
const object = { a: 1, b: 2, c: 3 };

// This is FOR...IN
for (const property in object) {
    console.log(`${property}: ${object[property]}`);
}