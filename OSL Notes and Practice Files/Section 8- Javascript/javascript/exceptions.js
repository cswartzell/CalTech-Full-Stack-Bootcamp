console.log("Slot Machine Active. Spin to Win: ");

// function getCashBack(luckyNumber) {
//     let getCashBacks = [23, 13, 7, 5, 3, 2, 29];
//     if (getCashBacks[luckyNumber]) {
//         return getCashBacks[luckyNumber];
//     } else {
//         let error = Error("Invalide Lucky Number")
//         throw error;
//     }

// }

function getCashBack(luckyNumber) {
    let getCashBacks = [23, 13, 7, 5, 3, 2, 29];
    if (getCashBacks[luckyNumber]) {
        return getCashBacks[luckyNumber];
    } else {
        let error = Error("Invalide Lucky Number")
        throw error;
    }

}




try {
    let cashBackEarned = getCashBack("whoops");
    console.log("Cash Earned: " + cashBackEarned);
} catch (error) {
    console.log("Whoops, invalid number.");
}
console.log("Slot Machine Deactive.");
