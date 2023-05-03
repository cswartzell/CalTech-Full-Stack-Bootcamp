// //literaal style object creation
// var emp = { id: 100, name: "john", age: 21 };
// document.write("<br/> Object Creation in Literal Style");
// document.write("<br/> ID: " + emp.id);
// document.write("<br/> NAME: " + emp.name);
// document.write("<br/> AGE: " + emp.age);


// employee(); // behaves like a normal funcion
// var emp1 = new employee(); //an OBJECT of employee type;
// This was the standard pre ES6, now you can use class keyword

//Hey look, Im hoisted
// Function Style Object Creation
// function employee() {
// NEED THIS keyword to bind to objects. Otherwise local var
// NOT ACCESSIBLE outside!. var obj1 = new empoyee; obj1.name is insaccaisble if not this
//     this.id = 100;
//     this.name = "Ravi"

//     this.display = function () {
//         document.write("<br/> Object Creation in Function Style");
//         document.write("<br/> NAME: " + this.name);
//         document.write("<br/> id: " + this.id);
//     }
// }

// var emp1 = new employee();
// emp1.display();

//Object creation in ES6 style
// class employee {
//     id = 100;
//     name = "Ravi";
//     // no need for function keyword even though no arrow?
//     display() {
//         document.write("<br/> Object Creation in Class Style");
//         document.write("<br/> NAME: " + this.name);
//         document.write("<br/> id: " + this.id);

//     }
// }
// //es6 standard is let
// let emp1 = new employee();
// emp1.display();