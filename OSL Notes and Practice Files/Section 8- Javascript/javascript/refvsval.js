let jonsAge = 10;
let fionasAge = jonsAge;

console.log("Jon's age: " + jonsAge);
console.log("Fiona's age: " + fionasAge);

console.log("Jon ages two years: ");
jonsAge = 12;
console.log("Jon's age: " + jonsAge);
console.log("Fiona's age: " + fionasAge);

// Note, fiona was copied by value on the init


//Arrays are copied by reference
let ages = [10, 20, 30, 40, 50];
let groupAges = ages;
console.log(groupAges);
ages[2] = 100;
console.log(groupAges);
