var person = {
    firstname: "John",
    lastname: "Doe",
    id: 5566,
    fullname: function() {
        return this.firstname + " " + this.lastname;
    }
};

console.log(person.fullname());

var message = "Hello world!";
var x = message.toUpperCase();

console.log(x);

person.name = function() {
    return `${this.firstname} ${this.lastname}`;
};

console.log(person.name());

var person = {
    name: "John", 
    age: 30, 
    city: "New York"
};

// var x, text = "";
// for (x in person) {
//     text += `${person[x]} `;
// }

person.today = new Date();

var arr = ["John", "Peter", "Sally", "Jane"];

document.getElementById("example-one").innerHTML = JSON.stringify(arr);

console.log(new Date());


var person = {
    firstName: "John",
    lastName: "Doe",
    language: "en",
    get lang() {
        return this.language.toUpperCase();
    },
    set lang(lang) {
        this.language = lang.toUpperCase();
    }
};

person.lang = "ru";

document.getElementById("example-two").innerHTML = person.lang;


var counter = {
    counter: 0
};

Object.defineProperty(counter, "reset", {
    get: function() {
        this.counter = 0;
    }
});

Object.defineProperty(counter, "increment", {
    get: function() {
        this.counter++;
    }
});

Object.defineProperty(counter, "decrement", {
    get: function() {
        this.counter--;
    }
});

Object.defineProperty(counter, "add", {
    set: function(value) {
        this.counter += value;
    }
});

Object.defineProperty(counter, "subtract", {
    set: function(value) {
        this.counter -= value;
    }
});

counter.reset;
counter.add = 5;
counter.subtract = 4;
counter.increment;
counter.decrement;
console.log(counter);



////////////////////////////////////////////////////////
///////////////    Object Constructors
////////////////////////////////////////////////////////


var myFather = {
    firstname: "John",
    lastname: "Doe",
    age: 49,
    eyeColor: "blue"
};

var myMother = {
    firstname: "Jane",
    lastname: "Doe",
    age: 48,
    eyeColor: "green"
};


function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}

var myFather = new Person("John", "Doe", 49, "blue");
var myMother = new Person("Jane", "Doe", 48, "green");

myFather.nationality = "Uzbek";
myFather.name = function() {
    return this.firstName + " " + this.lastName;
};

console.log(myFather.name());
