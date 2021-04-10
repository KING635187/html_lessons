// Math.random()
document.getElementById("demo").innerHTML = Math.random();

// JavaScript Random Integers
document.getElementById("demo1").innerHTML =
Math.floor(Math.random() * 100) + 1;

// A Proper Random Function
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

// The Boolean() Function
function myFunction1() {
    document.getElementById("demo3").innerHTML = Boolean(10 > 9);
  }

// Everything With a "Value" is True
var b1 = Boolean(100);
var b2 = Boolean(3.14);
var b3 = Boolean(-15);
var b4 = Boolean("Hello");
var b5 = Boolean('false');
var b6 = Boolean(1 + 7 + 3.14);

document.getElementById("demo4").innerHTML =
"100 is " + b1 + "<br>" +
"3.14 is " + b2 + "<br>" +
"-15 is " + b3 + "<br>" +
"Any (not empty) string is " + b4 + "<br>" +
"Even the string 'false' is " + b5 + "<br>" +
"Any expression (except zero) is " + b6;

// Everything Without a "Value" is False
function myFunction2() {
    var x = 10 / "H";
    document.getElementById("demo5").innerHTML = Boolean(x);
  }

// Booleans Can be Objects
var x = new Boolean(false);  // x is an object
var y = new Boolean(false);  // y is an object
document.getElementById("demo6").innerHTML = (x==y);

// Conditional (Ternary) Operator
function myFunction3() {
    var age, voteable;
    age = document.getElementById("age").value;
    voteable = (age < 18) ? "Too young":"Old enough";
    document.getElementById("demo7").innerHTML = voteable + " to vote.";
  }

// Comparing Different Types
function myFunction4() {
    var age, voteable;
    age = Number(document.getElementById("age2").value);
    if (isNaN(age)) {
      voteable = "Input is not a number";
    } else {
      voteable = (age < 18) ? "Too young" : "Old enough";
    }
    document.getElementById("demo8").innerHTML = voteable;
  }

//   The if Statement
if (new Date().getHours() < 18) {
    document.getElementById("demo9").innerHTML = "Good day!";
  }

//  The else Statement
function myFunction5() {
    var hour = new Date().getHours(); 
    var greeting;   
    if (hour < 18) {
      greeting = "Good day";
    } else {
      greeting = "Good evening";
    }
    document.getElementById("demo10").innerHTML = greeting;
  }
  

//   The else if Statement  
function myFunction6() {
    var greeting;
    var time = new Date().getHours();
    if (time < 10) {
      greeting = "Good morning";
    } else if (time < 20) {
      greeting = "Good day";
    } else {
      greeting = "Good evening";
    }
    document.getElementById("demo11").innerHTML = greeting;
  }