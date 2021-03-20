//new Date(year, month, ...)
var d = new Date(2018);
document.getElementById("demo").innerHTML = d;

// Previous Century
var d = new Date(9, 11, 24);
document.getElementById("demo1").innerHTML = d;

// new Date(dateString)
var d = new Date("October 13, 2014 11:13:00");
document.getElementById("demo2").innerHTML = d;

// new Date(milliseconds)
var d = new Date(86400000);
document.getElementById("demo3").innerHTML = d;

// Displaying Dates
var d = new Date();
document.getElementById("demo4").innerHTML = d.toISOString();

// JavaScript ISO Dates
var d = new Date("2015-03-25");
document.getElementById("demo5").innerHTML = d;

// The Boolean() Function
function myFunction() {
    document.getElementById("demo6").innerHTML = 10 > 9;
}

// Everything With a "Value" is True
var b1 = Boolean(100);
var b2 = Boolean(3.14);
var b3 = Boolean(-15);
var b4 = Boolean("Hello");
var b5 = Boolean('false');
var b6 = Boolean(1 + 7 + 3.14);

document.getElementById("demo7").innerHTML =
"100 is " + b1 + "<br>" +
"3.14 is " + b2 + "<br>" +
"-15 is " + b3 + "<br>" +
"Any (not empty) string is " + b4 + "<br>" +
"Even the string 'false' is " + b5 + "<br>" +
"Any expression (except zero) is " + b6;

// Conditional (Ternary) Operator
function myFunction() {
    var age, voteable;
    age = document.getElementById("age").value;
    voteable = (age < 18) ? "Too young":"Old enough";
    document.getElementById("demo8").innerHTML = voteable + " to vote.";
  }