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

//////////////////////////
///////Takrorlash-2///////
//////////////////////////

// Precision
var x = 0.2 + 0.1;
document.getElementById("demo2.1").innerHTML = "0.2 + 0.1 = " + x;
var y = (0.2*10 + 0.1*10) / 10;
document.getElementById("demo2.2").innerHTML = "0.2 + 0.1 = " + y;

// Adding Numbers and Strings
var x = 10;
var y = 20;
var z = "30";
var result = x + y + z;
document.getElementById("demo2.3").innerHTML = result;

// Numeric Strings
var x = "100";
var y = "10";
var z = x + y;   
document.getElementById("demo2.4").innerHTML = z;

// NaN - Not a Number
var x = NaN;
document.getElementById("demo2.5").innerHTML = typeof x;

// Infinity
var x = Infinity;
document.getElementById("demo2.6").innerHTML = typeof x;

// Hexadecimal
var myNumber = 32;
document.getElementById("demo2.7").innerHTML =
"32 = " + "<br>" + 
" Decimal " + myNumber.toString(10) + "<br>" +
" Hexadecimal " + myNumber.toString(16) + "<br>" +
" Octal " + myNumber.toString(8) + "<br>" +
" Binary " + myNumber.toString(2);

// Numbers Can be Objects
var x = new Number(500);  // x is an object
var y = new Number(500);  // y is an object
document.getElementById("demo2.8").innerHTML = (x==y);

// The toString() Method
var x = 123;
document.getElementById("demo2.9").innerHTML =
  x.toString() + "<br>" +
   (123).toString() + "<br>" +
   (100 + 23).toString();

// The toExponential() Method
var x = 9.656;
document.getElementById("demo2.10").innerHTML =
  x.toExponential() + "<br>" + 
  x.toExponential(2) + "<br>" + 
  x.toExponential(4) + "<br>" + 
  x.toExponential(6);

// The toFixed() Method
var x = 9.656;
document.getElementById("demo2.11").innerHTML =
  x.toFixed(0) + "<br>" +
  x.toFixed(2) + "<br>" +
  x.toFixed(4) + "<br>" +
  x.toFixed(6);

// The toPrecision() Method
var x = 9.656;
document.getElementById("demo2.12").innerHTML = 
  x.toPrecision() + "<br>" +
  x.toPrecision(2) + "<br>" +
  x.toPrecision(4) + "<br>" +
  x.toPrecision(6); 

// The valueOf() Method
var x = 123;

document.getElementById("demo2.13").innerHTML = 
  x.valueOf() + "<br>" +
  (123).valueOf() + "<br>" +
  (100 + 23).valueOf();

// The Number() Method
document.getElementById("demo2.14").innerHTML = 
  Number(true) + "<br>" +
  Number(false) + "<br>" +
  Number("10") + "<br>" + 
  Number("  10") + "<br>" +
  Number("10  ") + "<br>" +
  Number(" 10  ") + "<br>" +
  Number("10.33") + "<br>" + 
  Number("10,33") + "<br>" +
  Number("10 33") + "<br>" +
  Number("John");

// The Number() Method Used on Dates
var x = new Date("2017-09-30");
document.getElementById("demo2.15").innerHTML = Number(x); 

// The parseInt() Method
document.getElementById("demo2.16").innerHTML = 
  parseInt("10") + "<br>" +
  parseInt("10.33") + "<br>" +
  parseInt("10 6") + "<br>" +  
  parseInt("10 years") + "<br>" +  
  parseInt("years 10");  

// The parseFloat() Method
document.getElementById("demo2.17").innerHTML = 
  parseFloat("10") + "<br>" +
  parseFloat("10.33") + "<br>" +
  parseFloat("10 6") + "<br>" +  
  parseFloat("10 years") + "<br>" +
  parseFloat("years 10");   

// JavaScript MIN_VALUE and MAX_VALUE
var x = Number.MIN_VALUE;
document.getElementById("demo2.18").innerHTML = x;

// JavaScript POSITIVE_INFINITY
var x = 1 / 0;
document.getElementById("demo2.19").innerHTML = x;

// JavaScript NEGATIVE_INFINITY
var x = -1 / 0;
document.getElementById("demo2.20").innerHTML = x;

// JavaScript NaN - Not a Number
document.getElementById("demo2.21").innerHTML = 100 / "Apple";

// Number Properties Cannot be Used on Variables
var x = 6;
document.getElementById("demo2.22").innerHTML = x.MAX_VALUE;

// Creating an Array
var cars = [
  "Saab",
  "Volvo",
  "BMW"
];
document.getElementById("demo2.23").innerHTML = cars;

// Using the JavaScript Keyword new
var cars = new Array("Saab", "Volvo", "BMW");
document.getElementById("demo2.24").innerHTML = cars;

// Access the Elements of an Array
var cars = ["Saab", "Volvo", "BMW"];
document.getElementById("demo2.25").innerHTML = cars[0];

// Changing an Array Element
var cars = ["Saab", "Volvo", "BMW"];
cars[0] = "Opel";
document.getElementById("demo2.26").innerHTML = cars;

// Access the Full Array
var cars = ["Saab", "Volvo", "BMW"];
document.getElementById("demo2.27").innerHTML = cars;

// Arrays are Objects
var person = {firstName:"John", lastName:"Doe", age:46};
document.getElementById("demo2.28").innerHTML = person["firstName"];

// The length Property
var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo2.29").innerHTML = fruits.length;

// Accessing the First Array Element
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var first = fruits[0];
document.getElementById("demo2.30").innerHTML = first;

// Accessing the Last Array Element
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var last = fruits[fruits.length-1];
document.getElementById("demo2.31").innerHTML = last;

// Looping Array Elements
var fruits, text;
fruits = ["Banana", "Orange", "Apple", "Mango"];

text = "<ul>";
fruits.forEach(myFunction);
text += "</ul>";
document.getElementById("demo2.32").innerHTML = text;

function myFunction(value) {
  text += "<li>" + value + "</li>";
} 

// Adding Array Elements
var fruits, text, fLen, i;
fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits[6] = "Lemon";

fLen = fruits.length;
text = "";
for (i = 0; i < fLen; i++) {
  text += fruits[i] + "<br>";
}
document.getElementById("demo2.33").innerHTML = text;

// Associative Arrays
var person = [];
person["firstName"] = "John";
person["lastName"] = "Doe";
person["age"] = 46; 
document.getElementById("demo2.34").innerHTML =
person[0] + " " + person.length;

// Avoid new Array()
var points = new Array(40);
document.getElementById("demo2.35").innerHTML = points[0]; 

// How to Recognize an Array
var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo2.36").innerHTML = fruits instanceof Array;