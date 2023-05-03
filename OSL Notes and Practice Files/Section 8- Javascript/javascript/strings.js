let names = "Spike, Jack, Winston, Tiffany, Smudge";
console.log("Pets: " + names + " Datatype: " + typeof names);
console.log(names.length);

// names.toUpperCase();
// // DOES NOT MODIFY IN PLACE< need to catch the return
// console.log("NAMES IN UPPERCASE: " + names);

names = names.toUpperCase();
console.log("NAMES IN UPPERCASE: " + names);

let newNames = names.replace('J', 'K');
console.log("New Names: " + newNames);

let contactNames = [
    "Beth",
    "Charles",
    "David",
    "Frank",
    "Jessica",
    "Karen",
    "Taylor"
];

let searchKeyword = "aren";
for (let idx = 0; idx < contactNames.length; idx++) {
    if (contactNames[idx].endsWith(searchKeyword)) {
        console.log(contactNames[idx])
    }
}

let slice = names.substring(0, 4);
console.log(slice);
let split = names.split(",");
console.log(split);
for (named of split) {
    // console.log(named)
    console.log(named.trim())
}
