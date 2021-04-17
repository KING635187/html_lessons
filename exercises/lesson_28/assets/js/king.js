// The Break Statement
var text = "";
var i;
for (i = 0; i < 10; i++) {
  if (i === 3) { break; }
  text += "The number is " + i + "<br>";
}
// document.getElementById("demo").innerHTML = text;

// The Continue Statement
var text = "";
var i;
for (i = 0; i < 10; i++) {
  if (i === 3) { continue; }
  text += "The number is " + i + "<br>";
}
// document.getElementById("demo1").innerHTML = text;

// JavaScript Labels
var cars = ["BMW", "Volvo", "Saab", "Ford"];
var text = "";

list: {
  text += cars[0] + "<br>"; 
  text += cars[1] + "<br>"; 
  break list;
  text += cars[2] + "<br>"; 
  text += cars[3] + "<br>"; 
}

// document.getElementById("demo2").innerHTML = text;

// The typeof Operator
document.getElementById("demo3").innerHTML = 
  typeof "john" + "<br>" +
  typeof 3.14 + "<br>" +
  typeof NaN + "<br>" +
  typeof false + "<br>" +
  typeof [1,2,3,4] + "<br>" +
  typeof {name:'john', age:34} + "<br>" +
  typeof new Date() + "<br>" +
  typeof function () {} + "<br>" +
  typeof myCar + "<br>" +
  typeof null;