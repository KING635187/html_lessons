// JavaScript Object Prototypes
function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
  }
  
  var myFather = new Person("John", "Doe", 50, "blue");
  var myMother = new Person("Sally", "Rally", 48, "green");
  
  document.getElementById("demo").innerHTML =
  "My father is " + myFather.age + ". My mother is " + myMother.age;

// Using the prototype Property
function Person1(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}
  
Person1.prototype.name = function() {
    return this.firstName + " " + this.lastName
};
  
var myFather = new Person1("John", "Doe", 50, "blue");
document.getElementById("demo1").innerHTML =
"My father is " + myFather.name(); 

// Changing a Property Value
// Create an object:
var person = {
    firstName: "John",
    lastName : "Doe",
    language : "EN" 
};
// Change a property
Object.defineProperty(person, "language", {value:"NO"})
document.getElementById("demo2").innerHTML = person.language;

// Listing All Properties
// Create an object:
var person1 = {
    firstName: "John",
    lastName : "Doe",
    language : "EN"
}
// Change Property
Object.defineProperty(person1, "language", {enumerable:false});
// Display Properties
document.getElementById("demo3").innerHTML = Object.getOwnPropertyNames(person);

// Listing Enumerable Properties
// Create an object:
var person = {
    firstName: "John",
    lastName : "Doe",
    language : "EN"
}
// Change Property
Object.defineProperty(person, "language", {enumerable:false});
// Display Properties
document.getElementById("demo4").innerHTML = Object.keys(person);

// Adding a Property
// Create an object:
var person = {
    firstName: "John",
    lastName : "Doe",
    language : "EN"
};
// Add a property
Object.defineProperty(person, "year", {value:"2008"})
document.getElementById("demo5").innerHTML = person.year;

// Adding Getters and Setters
// Create an object:
var person = {firstName:"John", lastName:"Doe"};

// Define a getter
Object.defineProperty(person, "fullName", {
  get : function () {return this.firstName + " " + this.lastName;}
});

// Display full name
document.getElementById("demo6").innerHTML = person.fullName;

// A Counter Example
// Define an object
var obj = {counter:0};

// Define Setters and Getters
Object.defineProperty(obj, "reset", {
  get : function () {this.counter = 0;}
});
Object.defineProperty(obj, "increment", {
  get : function () {this.counter++;}
});
Object.defineProperty(obj, "decrement", {
  get : function () {this.counter--;}
});
Object.defineProperty(obj, "add", {
  set : function (value) {this.counter += value;}
});
Object.defineProperty(obj, "subtract", {
  set : function (value) {this.counter -= value;}
});

// Play with counter:
obj.reset;
obj.add = 5;
obj.subtract = 1;
obj.increment;
obj.decrement;
document.getElementById("demo7// Define an objectvar obj = {counter:0}");

// Define Setters and Getters
Object.defineProperty(obj, "reset", {
  get : function () {this.counter = 0;}
});
Object.defineProperty(obj, "increment", {
  get : function () {this.counter++;}
});
Object.defineProperty(obj, "decrement", {
  get : function () {this.counter--;}
});
Object.defineProperty(obj, "add", {
  set : function (value) {this.counter += value;}
});
Object.defineProperty(obj, "subtract", {
  set : function (value) {this.counter -= value;}
});

// Play with counter:
obj.reset;
obj.add = 5;
obj.subtract = 1;
obj.increment;
obj.decrement;
document.getElementById("demo").innerHTML = obj.counter;").innerHTML = obj.counter";