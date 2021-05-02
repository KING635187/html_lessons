// JavaScript Arrow Function

function number() {
    return "Hello World!";
}

var hello = function() {
    return "Hello World!";
}

var bye = word => "Bye " + word;

console.log(number());
console.log(hello());
console.log(bye("World!"));


// JavaScript Classes

class Car {
    constructor(name, year) {
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
console.log(audi.age(2014));

var text = '{ "employees" : [' +
'{ "firstName":"John" , "lastName":"Doe" },' +
'{ "firstName":"Anna" , "lastName":"Smith" },' +
'{ "firstName":"Peter" , "lastName":"Jones" } ]}';

console.log(JSON.parse(text));

console.log(JSON.stringify(ford));