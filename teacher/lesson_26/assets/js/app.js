var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.sort())
console.log(fruits.reverse());

var points = [40, 100, 12, 45, 76, 0];

console.log(points.sort(function(a, b) {
    return b - a;
}));

var randomSortedPoints = points.sort(function(a, b) {
    return 0.5 - Math.random();
});

console.log(randomSortedPoints);
// Fisher Yates Method
var i = points.length - 1;
for (i; i > 0; i--) {
    j = Math.floor(Math.random() * i);
    k = points[i];
    points[i] = points[j];
    points[j] = k;
}

console.log(points);
points.sort(function(a, b) {
    return a - b;
});
console.log("Largest value: " + points[points.length - 1]);
console.log("Lowest value: " + points[0]);

function arrayMax(arr) {
    return Math.max.apply(null, arr);
}

function arrayMin(arr) {
    return Math.min.apply(null, arr);
}

console.log(arrayMax(points));
console.log(arrayMin(points));

var cars = [
    {
        type: "Volvo", 
        year: 2016
    },
    {
        type: "Saab", 
        year: 2001
    },
    {
        type: "BMW", 
        year: 2010
    }
];

console.log(cars.sort(function(a, b) {
    return a.year - b.year;
}));

console.log(cars.sort(function(a, b) {
    var x = a.type.toLowerCase();
    var y = b.type.toLowerCase();
    if (x < y) {return -1;}
    if (x > y) {return 1;}
    return 0;
}));

var text = "";
var numbers = [45, 4, 9, 16, 25];

numbers.forEach(myFunction);

function myFunction(value) {
    text += value + ", ";
}
console.log(text);

var numbers1 = [45, 4, 9, 16, 25];
var numbers2 = numbers1.map(function(value) {
    return value * 2;
});
console.log(numbers2);

var over18 = numbers.filter(function(value) {
    return value > 18;
});
console.log(over18);

var sum = numbers.reduce(function(total, value) {
    return total + value;
});
console.log(sum);