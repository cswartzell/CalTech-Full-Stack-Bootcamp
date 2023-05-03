/*
    PromoCode1: JUMBO
    30% off on purchase over 150

    PromoCode: BINGO
    50% off on purchase over 300, up to 200 off
*/

let amount = 1000;
let promocode = "JUMBO";

if (promocode == "JUMBO" && amount > 150) {
    amount = amount - 0.3 * amount
    console.log("Amount to Pay is: " + amount)
}
else {
    console.log("PromoCode incorrect or Amount insufficient for PromoCode")
}

// NOTE: CANNOT LET AGAIN
// let promocode = "BINGO";
promocode = "BINGO";
// promocode = "HAPPY";

if (promocode == "BINGO" && amount > 300) {
    if (amount < 400)
        amount = amount - (0.5 * amount);
    else
        amount -= 400

    console.log("Amount to Pay is: " + amount)
}
else {
    console.log("PromoCode incorrect or Amount insufficient for PromoCode")
}