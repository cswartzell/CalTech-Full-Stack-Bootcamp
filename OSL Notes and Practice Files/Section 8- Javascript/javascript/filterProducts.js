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

// Filter passes elements from iterable to filter function, and expects True or False on each
function filterByPrice(product) {
    return (product.price > 51)
}

// does nothing, returns NEW array
// products.filter(filterByPrice);
let filteredProducts = products.filter(filterByPrice);

//forgot the let or var and it worked fine. I guess its optional for declaration
// filteredProducts = products.filter(filterByPrice);



function printArray(array) {
    for (let item of array) {
        console.log(item);
    }
}

printArray(filteredProducts);
