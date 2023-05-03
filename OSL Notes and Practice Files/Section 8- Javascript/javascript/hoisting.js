// Just tells interpreter to move declarations to top on load

console.log(greetings(myName));
var myName;
function greetings(name) {
    return "Hello " + name + "!! Nice to meet you!";
}

// returns undefined when used before, but not an error
// var myName = "Cam";

// straight error
// let myName = "Cam"


myName = "cam"
