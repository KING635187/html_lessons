///////////////////// №1
is_string = function(input) {
    if (Object.prototype.toString.call(input) === '[object String]')
      return true;
    else
      return false;   
      };
console.log(is_string('w3resource'));
console.log(is_string([1, 2, 4, 0]));


///////////////////// №2
is_Blank =  function(input) {
    if (input.length === 0)
    return true;
    else 
    return false;
  }
console.log(is_Blank(''));
console.log(is_Blank('abc'));


///////////////////// №3
string_to_array = function (str) {
    return str.trim().split(" ");
};
console.log(string_to_array("Robin Singh"));


///////////////////// №4
truncate_string = function (str1, length) {
  
    if ((str1.constructor === String) && (length>0)) {
        return str1.slice(0, length);
    }
};
console.log(truncate_string("Robin Singh",4));


///////////////////// №5
abbrev_name = function (str1) {
    var split_names = str1.trim().split(" ");
    if (split_names.length > 1) {
        return (split_names[0] + " " + split_names[1].charAt(0) + ".");
    }
    return split_names[0];
};
console.log(abbrev_name("Robin Singh"));


// Creating an Array
var cars = ["Saab", "Volvo", "BMW"];
document.getElementById("array").innerHTML = cars;


// Access the Elements of an Array
var cars = ["Saab", "Volvo", "BMW"];
document.getElementById("demo").innerHTML = cars[0];


// Changing an Array Element
var cars = ["Saab", "Volvo", "BMW"];
cars[0] = "Opel";
document.getElementById("demo1").innerHTML = cars;


// Arrays are Objects
var person = {firstName:"John", lastName:"Doe", age:46};
document.getElementById("demo2").innerHTML = person["firstName"];


// The length Property
var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo3").innerHTML = fruits.length;


//Accessing the First Array Element
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var first = fruits[0];
document.getElementById("demo4").innerHTML = first;


// Accessing the Last Array Element
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var last = fruits[fruits.length-1];
document.getElementById("demo5").innerHTML = last;


// Looping Array Elements
var fruits, text, fLen, i;
fruits = ["Banana", "Orange", "Apple", "Mango"];
fLen = fruits.length;

text = "<ul>";
for (i = 0; i < fLen; i++) {
  text += "<li>" + fruits[i] + "</li>";
}
text += "</ul>";

document.getElementById("demo6").innerHTML = text;


// Adding Array Elements
var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo7").innerHTML = fruits;

function myFunction() {
  fruits.push("Lemon");
  document.getElementById("demo7").innerHTML = fruits;
}


// Associative Arrays
var person = [];
person["firstName"] = "John";
person["lastName"] = "Doe";
person["age"] = 46; 
document.getElementById("demo8").innerHTML = person[0] + " " + person.length;


// Avoid new Array()
var points = new Array(40);
document.getElementById("demo9").innerHTML = points[0]; var points = new Array(40);
document.getElementById("demo9").innerHTML = points[0]; 


// How to Recognize an Array
var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo10").innerHTML = fruits instanceof Array;


// Converting Arrays to Strings
var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo11").innerHTML = fruits.join(" * ");


// Popping
var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo1.1").innerHTML = fruits;
document.getElementById("demo2.1").innerHTML = fruits.pop();
document.getElementById("demo3.1").innerHTML = fruits;


// Pushing
var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo1.2").innerHTML = fruits;

function myFunction() {
  document.getElementById("demo2.2").innerHTML = fruits.push("Kiwi");
  document.getElementById("demo1.2").innerHTML = fruits;
}


// Shifting Elements
var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo1.3").innerHTML = fruits;
document.getElementById("demo2.3").innerHTML = fruits.unshift("Lemon");
document.getElementById("demo3.3").innerHTML = fruits;


// Merging (Concatenating) Arrays
var arr1 = ["Emil", "Tobias", "Linus"];
var myChildren = arr1.concat("Peter"); 
document.getElementById("demo12").innerHTML = myChildren;


// Slicing an Array
var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruits.slice(2);
document.getElementById("demo13").innerHTML = fruits + "<br><br>" + citrus;


// Automatic toString()
var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo14").innerHTML = fruits;