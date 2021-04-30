// JavaScript Arrow Function 
// Before:
var hello;
hello = function() {
  return "Hello World!";
}
document.getElementById("demo").innerHTML = hello();
// With Arrow Function:
var hello;
hello = () => {
  return "Hello World!-1";
}
document.getElementById("demo1").innerHTML = hello();
// Arrow Functions Return Value by Default:
var hello;
hello = () => "Hello World!-2";
document.getElementById("demo2").innerHTML = hello();
// Arrow Function With Parameters:
var hello;
hello = (val) => "Hello World!-3" + val;
document.getElementById("demo3").innerHTML = hello("Universe!");
// Arrow Function Without Parentheses:
var hello;
hello = val => "Hello World!-4" + val;
document.getElementById("demo4").innerHTML = hello("Universe!");


// What About this?
var hello;

hello = () => {
  document.getElementById("demo5").innerHTML += this;
}

//The window object calls the function:
window.addEventListener("load", hello);

//A button object calls the function:
document.getElementById("btn").addEventListener("click", hello);

// Using a Class
class Car {
constructor(name, year) {
    this.name = name;
    this.year = year;
}
}
myCar = new Car("Ford", 2014);
document.getElementById("demo6").innerHTML =
myCar.name + " " + myCar.year;

// Class Methods
// class Car {
//   constructor(name, year) {
//     this.name = name;
//     this.year = year;
//   }
//   age(x) {
//     return x - this.year;
//   }
// }

// let date = new Date();
// let year = date.getFullYear();

// let myCar = new Car("Ford", 2014);
// document.getElementById("demo7").innerHTML=
// "My car is " + myCar.age(year) + " years old.";

// Converting a JSON Text to a JavaScript Object
var text = '{"employees":[' +
'{"firstName":"John","lastName":"Doe" },' +
'{"firstName":"Anna","lastName":"Smith" },' +
'{"firstName":"Peter","lastName":"Jones" }]}';

obj = JSON.parse(text);
document.getElementById("demo8").innerHTML =
obj.employees[1].firstName + " " + obj.employees[1].lastName;

//The console.log() Method
 a = 5;
b = 6;
c = a + b;
console.log(c);
document.getElementById("demo9").innerHTML = c;

// The debugger Keyword 
var x = 15 * 5;
debugger;
document.getElementById("demo10").innerHTML = x;
