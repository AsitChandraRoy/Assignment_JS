// Create a variable called carName, assign the value Volvo to it.

let carName = "Volvo";
console.log(carName);

{// On one single line, declare three variables with the following names and values:
// So What Will Be The 1st Variable Name, Then 2nd Variable Values &
// 3rd Variable Name And Values Both!

let firstName = "John"; // write variable name
let lastName = "Doe"; //write variable values
let age = 35; // write variable name and values both

console.log(`This is ${firstName} ${lastName} .His age is ${age}.`);}

{// Use the correct assignment operator that will
// result in x being 50 (same as x = x * y).

let x, y;
x = 10;
y = 5;
x *= y; // what will be the value of x ?

console.log(x);}

// // Use comments to describe the correct data type of the following variables:

// let length = 16; // number type
// let lastName = "Johnson"; // string type

// const x = {
//     firstName: "John",
//     lastName: "Doe"
// };    // object type

// Execute the function named myFunction.

function myFunction() {
  alert("Hello World!");
}
myFunction(); // call the function and see the output

// 1. Create an object called person with name = John, age = 50, Then,
//    access the object to alert("John is 50").

let person = {
  name: "John",
  age: 50,
};

alert(`${person.name} is ${person.age}`);

// 1. The <button> element should do something when someone clicks on it. Try to fix it!


  /* <button>Click me.</button> */


const button = document.getElementById("button");
const text = document.getElementById("text");

// @ts-ignore
button.addEventListener("click", function () {
  alert("Try to fix it!");
  // @ts-ignore
  text.innerHTML = "Try to fix it!";
});

// 1. Alert the number of items in an array, using the correct Array property:

const cars = ["Volvo", "Jeep", "Mercedes"];
alert(`${cars.length}`);

// 2. Change the first item of Brand to "Ford".

const Brand = ["Volvo", "Jeep", "Mercedes"];
Brand[0] = "Ford";
console.log(Brand);


// 1. Use the correct Math method to create a random number.
console.log(Math.random());
// 2. Use the correct Math method to return the largest number of 10 and 20.
console.log(Math.max(10, 20));

// 3. Use the correct Math method to get the square root of 9.
console.log(Math.sqrt(9));


// 1. Choose the correct comparison operator to alert true, when x is greater than y.
let x = 10;
let y = 5;

alert(x > y);



// 2. Choose the correct conditional (ternary) operator to alert "Too young" if age is less than 18, otherwise alert "Old enough".
let age = 18;
age < 18 ? alert("Too young") : alert("Old enough");
