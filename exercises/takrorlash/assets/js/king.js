//  Using innerHTML
document.getElementById("demo6").innerHTML = 5 + 6;

// JavaScript Statements
document.getElementById("demo7").innerHTML = "Hello Dolly.";

// Semicolons ;
var a, b, c;
a = 5;
b = 6;
c = a + b;
document.getElementById("demo8").innerHTML = c;

// JavaScript Line Length and Line Breaks
document.getElementById("demo9").innerHTML =
"Hello Dolly!";

// JavaScript Code Blocks
function myFunction() {
    document.getElementById("demo1.1").innerHTML = "Hello Dolly!";
    document.getElementById("demo1.2").innerHTML = "How are you?";
}

// JavaScript Variables
var x;
x = 6;
document.getElementById("demo10").innerHTML = x;

// JavaScript Operators
var x, y;
x = 5;
y = 6;
document.getElementById("demo11").innerHTML = x + y;

// JavaScript Expressions
document.getElementById("demo12").innerHTML = "John" + " "  + "Doe";

// JavaScript Keywords
var x, y;
x = 5 + 6;
y = x * 10;
document.getElementById("demo13").innerHTML = y;

// JavaScript Comments
var x;
x = 5;
// x = 6; I will not be executed
document.getElementById("demo14").innerHTML = x;

// JavaScript is Case Sensitive
var lastname, lastName;
lastName = "Doe";
lastname = "Peterson";
document.getElementById("demo15").innerHTML = lastName;

// Single Line Comments
var x = 5;    // Declare x, give it the value of 5
var y = x + 2;  // Declare y, give it the value of x + 2 
// Write y to demo:
document.getElementById("demo16").innerHTML = y;

// Multi-line Comments
document.getElementById("myH").innerHTML = "JavaScript Comments";
document.getElementById("myP").innerHTML = "My first paragraph.";

// Much Like Algebra
var price1 = 5;
var price2 = 6;
var total = price1 + price2;
document.getElementById("demo17").innerHTML =
"The total is: " + total;

// JavaScript Data Types
var pi = 3.14;
var person = "John Doe";
var answer = 'Yes I am!';

document.getElementById("demo18").innerHTML =
pi + "<br>" + person + "<br>" + answer;

// Declaring (Creating) JavaScript Variables
var carName = "Volvo";
document.getElementById("demo19").innerHTML = carName;

//  One Statement, Many Variables
var person = "John Doe",
carName = "Volvo",
price = 200;
document.getElementById("demo20").innerHTML = carName;

// Value = undefined
var carName;
document.getElementById("demo21").innerHTML = carName;

// Re-Declaring JavaScript Variables
var carName = "Volvo";
var carName;
document.getElementById("demo22").innerHTML = carName;

// JavaScript Arithmetic
var x = 2 + 3 + "5";
document.getElementById("demo23").innerHTML = x;

// JavaScript Dollar Sign $
var $ = 2;
var $myMoney = 5;
document.getElementById("demo24").innerHTML = $ + $myMoney;

// JavaScript Underscore (_)
var _x = 2;
var _100 = 5;
document.getElementById("demo25").innerHTML = _x + _100;

// Global Scope
var carName = "Volvo";
myFunction();

function myFunction() {
  document.getElementById("demo26").innerHTML = "I can display " + carName;
}

// Function Scope
myFunction();

function myFunction() {
  var carName = "Volvo";
  document.getElementById("demo1.3").innerHTML = typeof carName + " " + carName;
}
document.getElementById("demo1.4").innerHTML = typeof carName;

// Redeclaring Variables
var  x = 10;
// Here x is 10
{  
  let x = 2;
  // Here x is 2
}
// Here x is 10
document.getElementById("demo1.5").innerHTML = x;

// Loop Scope
let i = 5;
for (let i = 0; i < 10; i++) {
  // some statements
}
document.getElementById("demo1.6").innerHTML = i;

// Redeclaring
let m = 2;   // Allowed

{
  let m = 3;   // Allowed
}

{
  let m = 4;   // Allowed
}
document.getElementById("demo1.7").innerHTML = x;

// Hoisting
carName = "Volvo";
document.getElementById("demo1.8").innerHTML = carName;
var carName;

// ECMAScript 2015
try {
    const PI = 3.141592653589793;
    PI = 3.14;
}
  catch (err) {
    document.getElementById("demo1.9").innerHTML = err;
}

// Block Scope
var  x = 10;
// Here x is 10
{  
  const x = 2;
  // Here x is 2
}
// Here x is 10
document.getElementById("demo1.10").innerHTML = x;

// Constant Objects can Change
// Create an object:
const car = {type:"Fiat", model:"500", color:"white"};

// Change a property:
car.color = "red";

// Add a property:
car.owner = "Johnson";

// Display the property:
document.getElementById("demo1.11").innerHTML = "Car owner is " + car.owner; 

// Constant Arrays can Change
// Create an Array:
const cars = ["Saab", "Volvo", "BMW"];

// Change an element:
cars[0] = "Toyota";

// Add an element:
cars.push("Audi");

// Display the Array:
document.getElementById("demo1.12").innerHTML = cars; 

// Hoisting
carName = "Volvo";
document.getElementById("demo1.13").innerHTML = carName;
var carName;

// JavaScript String Operators
txt1 = "What a very ";
txt1 += "nice day";
document.getElementById("demo1.14").innerHTML = txt1;

// Adding Strings and Numbers
var x = 5 + 5;
var y = "5" + 5;
var z = "Hello" + 5;
document.getElementById("demo1.15").innerHTML =
x + "<br>" + y + "<br>" + z;