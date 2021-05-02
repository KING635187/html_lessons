// JavaScript Arrow Function

function number() {
    return "Hello world!";
}

var hello = function() {
    return "Hello world!";
}

var bye = word => "Bye " + word;

console.log(number());
console.log(hello());
console.log(bye("world!"));

// JavaScript Classes

class Car {
    canstructor(name, year) {
        this.name = name;
        this.year = year;
    }
    age(year) {
        let date = new Date();
        return date.getFullYear() - year;
    }
}

let ford = new Car("Ford", 2014);
console.log(ford);
let audi = new Car("Audi", 2019);
console.log(audi);

console.log(ford.age(2010));
console.log(audi.age(2015));