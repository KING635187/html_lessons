// Line Length < 80
document.getElementById("demo").innerHTML =
"Hello Dolly.";

// Never Declare Number, String, or Boolean Objects
var x = new String("John"); 
var y = new String("John");
document.getElementById("demo1").innerHTML = x==y;

// Don't Use new Object()
var x1 = {};
var x2 = "";
var x3 = 0;
var x4 = false;
var x5 = [];
var x6 = /()/;
var x7 = function(){};

document.getElementById("demo2").innerHTML =
"x1: " + typeof x1 + "<br>" +
"x2: " + typeof x2 + "<br>" +
"x3: " + typeof x3 + "<br>" +
"x4: " + typeof x4 + "<br>" +
"x5: " + typeof x5 + "<br>" +
"x6: " + typeof x6 + "<br>" +
"x7: " + typeof x7 + "<br>";

// Beware of Automatic Type Conversions
var x = 5;
document.getElementById("demo3").innerHTML = x.valueOf() + " " + typeof x;

// Use === Comparison
var x;
document.getElementById("demo4").innerHTML = x;

// Use Parameter Defaults
function myFunction(x, y) {
    if (y === undefined) {
      y = 0;
    }  
    return x * y;
}
document.getElementById("demo5").innerHTML = myFunction(4);

// End Your Switches with Defaults
var day;
switch (new Date().getDay()) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case  6:
      day = "Saturday";
      break;
    default:
       day = "unknown";
}
document.getElementById("demo6").innerHTML = "Today is " + day;

// Accidentally Using the Assignment Operator
var x = 0;
document.getElementById("demo7").innerHTML = Boolean(x = 0);

// Expecting Loose Comparison
var x = 10;
switch(x) {
  case "10": alert("Hello");
}
document.getElementById("demo8").innerHTML = x;

// Confusing Addition & Concatenation
var x = 10;
var y = "5";
var z = x + y;
document.getElementById("demo9").innerHTML = z;

// Misunderstanding Floats
var x = 0.1;
var y = 0.2;
var z = (x * 10 + y *10) / 10;
document.getElementById("demo10").innerHTML = z;

// Breaking a JavaScript String
document.getElementById("demo11").innerHTML = "Hello \ World!";

// Misplacing Semicolon
var x = 5;
if (x == 19);
{
document.getElementById("demo12").innerHTML = "Hello";
}

// Breaking a Return Statement
document.getElementById("demo13").innerHTML = myFunction(55);
function myFunction(a) {
  var
  power = 10;
  return;
  a * power;
}

// Accessing Arrays with Named Indexes
var person = [];
person["firstName"] = "John";
person["lastName"] = "Doe";
person["age"] = 46; 
document.getElementById("demo14").innerHTML =
person[0] + " " + person.length;

// Undefined is Not Null
document.getElementById("demo15").innerHTML = typeof myObj !== "undefined" && myObj !== null;

// Reduce DOM Access
var obj;
obj = document.getElementById("demo16");
obj.innerHTML = " Hello";