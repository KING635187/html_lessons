var x = "Volvo" + 16 + 4;
document.getElementById("demo").innerHTML = x;

// JavaScript Types are Dynamic
var x;         // Now x is undefined
x = 5;         // Now x is a Number
x = "John";      // Now x is a String

document.getElementById("demo1").innerHTML = x;

// JavaScript Strings
var carName1 = "Volvo XC60";
var carName2 = 'Volvo XC70';

document.getElementById("demo2").innerHTML =
carName1 + "<br>" + carName2; 

// JavaScript Numbers
var y = 123e5;
var z = 123e-5;

document.getElementById("demo3").innerHTML =
y + "<br>" + z;

// JavaScript Function Syntax
var x = myFunction(4, 3);
document.getElementById("demo4").innerHTML = x;

function myFunction(a, b) {
  return a * b;
}

// Why Functions?
function toCelsius(f) {
    return (5/9) * (f-32);
  }
  document.getElementById("demo5").innerHTML = toCelsius(77);

// The () Operator Invokes the Function
function toCelsius(f) {
    return (5/9) * (f-32);
  }
  document.getElementById("demo6").innerHTML = toCelsius;

// Functions Used as Variable Values
document.getElementById("demo7").innerHTML =
"The temperature is " + toCelsius(77) + " Celsius";

function toCelsius(fahrenheit) {
  return (5/9) * (fahrenheit-32);
} 

// Local Variables
myFunction();

function myFunction() {
  var carName = "Volvo";
  document.getElementById("demo8").innerHTML =
  typeof carName + " " + carName;
}

document.getElementById("demo8.2").innerHTML =
typeof carName;

// JavaScript Objects
// Create an object:
var car = {type:"Fiat", model:"500", color:"white"};

// Display some data from the object:
document.getElementById("demo9").innerHTML = "The car type is " + car.type;

// Object Definition
// Create an object:
var person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  };
  
// Display some data from the object:
document.getElementById("demo10").innerHTML =
person.firstName + " is " + person.age + " years old.";

// Accessing Object Properties
// Create an object:
var person = {
    firstName: "John",
    lastName : "Doe",
    id     :  5566
  };
// Display some data from the object:
document.getElementById("demo11").innerHTML =
person["firstName"] + " " + person["lastName"];

// Accessing Object Methods
// Create an object:
var person = {
    firstName: "John",
    lastName : "Doe",
    id     : 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
  };
  
// Display data from the object:
document.getElementById("demo12").innerHTML = person.fullName;

// HTML Events
function displayDate() {
    document.getElementById("demo13").innerHTML = Date();
  }

// JavaScript Strings
var answer1 = "It's alright";
var answer2 = "He is called 'Johnny'";
var answer3 = 'He is called "Johnny"'; 

document.getElementById("demo14").innerHTML =
answer1 + "<br>" + answer2 + "<br>" + answer3; 

// String Length
var txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var sln = txt.length;
document.getElementById("demo15").innerHTML = sln;

// Escape Character
var x = "The character \\ is called backslash.";
document.getElementById("demo16").innerHTML = x; 

// Breaking Long Code Lines
document.getElementById("demo17").innerHTML = "Hello Dolly.";

// Strings Can be Objects
var x = new String("John");  // x is an object
var y = new String("John");  // y is an object
document.getElementById("demo18").innerHTML = (x===y);