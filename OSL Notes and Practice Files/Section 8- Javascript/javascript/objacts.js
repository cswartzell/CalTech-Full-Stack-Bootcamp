// COMMA SEPERATED
let user = {
    name: "Cameron Swartzell",
    email: "email@fmail.com",
    phone: "555-555-5555",
    address: {
        streetName: "Main",
        streetNumber: 123,
        country: "USA",
        zipcode: 12345,
    },
    // ooh a nested array OF objects?
    orders: [
        {
            oid: 1,
            amount: 2000,
            date: '20-11-2023'
        },

        {
            oid: 2,
            amount: 2400,
            date: '20-12-2023'
        }
    ]
}


console.log(user)
console.log(typeof user)
// odd syntax here. I hate it. DOT notation
console.log("Orders: " + user['orders'][0]['amount'])
console.log("Orders: " + user.orders[0].amount)
console.log("Orders: " + user.orders)

// Ugh... remember all the commas
const product = {
    pid: 101,
    name: "GOOP",
    brand: "GOOP inc",
    price: 4.99,
    inventory: [
        {
            color: "red",
            stock: 1000
        },
        {
            color: "blue",
            stock: 1000
        },
        {
            color: "green",
            stock: 1000
        },
        {
            color: "lava",
            stock: 800
        }
    ]
}

console.log(product);
// despite the product object being const we can update its values... 
// Protects you from reinitialising.
product.inventory[0].stock = 400
console.log(product);
