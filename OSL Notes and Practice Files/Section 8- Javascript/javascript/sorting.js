let products = [
    {
        name: "Just a Rock",
        price: 50.00
    },
    {
        name: "Two Rocks",
        price: 85.00
    },
    {
        name: "Rare Rock",
        price: 150.00
    },
    {
        name: "Bargain Rock",
        price: 5.00
    },

]

function printArray(array) {
    for (let item of array) {
        console.log(item);
    }
}

//lol wut?
function sortOnPrice(product1, product2) {
    return product1.price - product2.price;
}

// so... I guess its going to automatically pass pairs
//items from the iterable and if it receives a negative
// it knows they are in ascending order (which is default 
//behavior and what we are asking for), and if it receives a positive
// result it swaps the order of the two? Just a WEIRD way of going about that
//SORT IS IN PLACE
products.sort(sortOnPrice);

printArray(products);