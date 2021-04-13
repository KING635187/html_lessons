// JavaScript Loops
var cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
var text = "";
var i;
for (i = 0; i < cars.length; i++) {
  text += cars[i] + "<br>";
}
document.getElementById("demo").innerHTML = text;

// The For Loop
var text = "";
var i;
for (i = 0; i < 5; i++) {
  text += "The number is " + i + "<br>";
}
document.getElementById("demo1").innerHTML = text;

// Statement 1
var cars = ["BMW", "Volvo", "Saab", "Ford"];
var i = 2;
var len = cars.length;
var text = "";

for (; i < len; i++) {
  text += cars[i] + "<br>";
}

document.getElementById("demo2").innerHTML = text;

// Statement 3
var cars = ["BMW", "Volvo", "Saab", "Ford"];

var i = 0;
var len = cars.length;
var text = "";

for (; i < len; ) {
  text += cars[i] + "<br>";
  i++;
}
document.getElementById("demo3").innerHTML = text;

// The For/In Loop
var txt = "";
var person = {fname:"John", lname:"Doe", age:25}; 
var x;
for (x in person) {
  txt += person[x] + " ";
}
document.getElementById("demo4").innerHTML = txt;

// For/In Over Arrays
var txt = "";
var numbers = [45, 4, 9, 16, 25];
var x;
for (x in numbers) {
  txt += numbers[x] + "<br>"; 
}
document.getElementById("demo5").innerHTML = txt;

// Array.forEach()
var txt = "";
var numbers = [45, 4, 9, 16, 25];
numbers.forEach(myFunction);
document.getElementById("demo6").innerHTML = txt;

function myFunction(value) {
  txt = txt + value + "<br>"; 
}

// Looping over an Array
var cars = ["BMW", "Volvo", "Mini"];
var text = "";

for (let x of cars) {
  text += x + "<br>";
}

document.getElementById("demo7").innerHTML = text;

// Looping over a String
var language = "JavaScript";
var text = "";

for (let x of language) {
  text += x + "<br>";
}

document.getElementById("demo8").innerHTML = text;

// The While Loop
var text = "";
var i = 0;
while (i < 10) {
  text += "<br>The number is " + i;
  i++;
}
document.getElementById("demo9").innerHTML = text;

// Comparing For and While
var cars = ["BMW", "Volvo", "Saab", "Ford"];
var i = 0;
var text = "";
while (cars[i]) {
  text += cars[i] + "<br>";
  i++;
}
document.getElementById("demo10").innerHTML = text;