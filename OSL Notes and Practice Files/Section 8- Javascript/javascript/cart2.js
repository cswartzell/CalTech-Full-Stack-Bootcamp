let prompt = require('prompt-sync')();

let menu = {
    burger: 100,
    noodles: 200,
    pizza: 250,
    fries: 50,
    soda: 50,
}


let cart = [];

console.log("Cart: " + cart + " Total Items: " + cart.length);

while (true) {
    let choice = prompt("Order an item: ");

    if (choice == "quit" || choice == "q")
        break;

    // console.log("Your choice: " + choice);
    let dish = {
        name: choice,
        price: menu[choice]
    }
    cart.push(dish)
}



console.log("Cart: " + cart + " Total Items: " + cart.length);
//Code exactly as shown on video, doesnt work. Video cheats and doesnt show it works
// either and instead jump cuts to writing for...of. This method is clearly flawed
// and they left it in and just moved ahead

// for (let output in cart) {
//     console.log(output.name + " $" + output.price);
// }

for (let output of cart) {
    console.log(output);
}
