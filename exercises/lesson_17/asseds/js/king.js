// Single Line Comments
document.getElementById("myH").innerHTML = "JavaScript Comments"
document.getElementById("myP").innerHTML = "My first paragraph."
var x = 5;
var y = x + 2;
document.getElementById("demo").innerHTML = y;

// Multi-line Comments
document.getElementById("myHH").innerHTML = "JavaScript Comments"
document.getElementById("myPP").innerHTML = "My first paragraph."

// Using Comments to Prevent Execution
document.getElementById("myPPP").innerHTML = "My first paragraph."

// Much Like Algebra
var price1 = 5;
var price2 = 7;
var total = price1 + price2;
document.getElementById("demo2").innerHTML = total;

// JavaScript Data Types
var pi = 3.14;
var person = "John Doe";
var answer = 'Yes I am!';

document.getElementById("demo3").innerHTML =
pi + "<br>" + person + "<br>" + answer;

// Declaring (Creating) JavaScript Variables
var carName = "Volvo";
document.getElementById("demo4").innerHTML = carName;

// One Statement, Many Variables
var person = "John Doe",
carName = "Volvo",
price = 200;
document.getElementById("demo5").innerHTML = carName;

// Value = undefined
var carName;
document.getElementById("demo6").innerHTML = carName;

// JavaScript Arithmetic
var x = 2 + 3 + "5";
document.getElementById("demo7").innerHTML = x;

// JavaScript Dollar Sign $
var $ = 2;
var $myMoney = 5;
document.getElementById("demo8").innerHTML = $ + $myMoney;

// Global Scope
var carName = "Volvo";
myFunction();

function myFunction() {
  document.getElementById("demo9").innerHTML = "I can display " + carName;
}

// Function Scope
myFunction();

function myFunction() {
  var carName = "Volvo";
  document.getElementById("demo10").innerHTML = typeof carName + " " + carName;
}
document.getElementById("demo11").innerHTML = typeof carName;

// Redeclaring Variables
var  x = 10;
// Here x is 10
{  
  let x = 2;
  // Here x is 2
}
// Here x is 10
document.getElementById("demo12").innerHTML = x;

// Loop Scope
let i = 5;
for (let i = 0; i < 10; i++) {
  // some statements
}
document.getElementById("demo13").innerHTML = i;

// Global Variables in HTML
// let carName = "Volvo";
// document.getElementById("demo14").innerHTML = "I can not display " + window.carName;

// Redeclaring
// let x = 2;   // Allowed
// {
//   let x = 3;   // Allowed
// }

// {
//   let x = 4;   // Allowed
// }
// document.getElementById("demo15").innerHTML = x;

// Hoisting
try {
    carName = "Volvo";
    let carName;
    document.getElementById("demo16").innerHTML = carName;
}
catch(err) {
    document.getElementById("demo16").innerHTML = err.name + ": " + err.message;
}