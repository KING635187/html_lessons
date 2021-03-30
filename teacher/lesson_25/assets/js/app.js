// Array Methods

var fruits = ["Banana", "Orange", "Apple", "Mango"];

// console.log(fruits.sort());
console.log(fruits[0])

var fruitsContainer = document.getElementById("fruits"),
    fruitLength = fruits.length,
    text = "<ul>",
    i = 0;

fruits.push("Lemon");

console.log(fruits);

// for (i; i < fruitLength; i++) {
//     text += "<li>" + fruits[i] + "</li>";
// }

fruits.forEach(function(fruit) {
    text += "<li>" + fruit + "</li>";
});

text += "</ul>";

fruitsContainer.innerHTML = text;

console.log(fruits.toString());
console.log(fruits.join(" * "));

console.log(fruits.pop());
console.log(fruits);

console.log(fruits.shift());
console.log(fruits);
console.log(fruits.unshift("Lemon"));
console.log(fruits);

console.log(fruits[0] = "Kiwi");
console.log(fruits[fruits.length] = "Kiwi");
console.log(fruits);

// delete fruits[0]

console.log(fruits);

console.log(fruits.splice(1, 2, "Lemon", "Cherry"));
console.log(fruits);

console.log(fruits.splice(2, 1));
console.log(fruits);

var myGirls = ["Cecilie", "Lone"];
var myBoys = ["Emil", "Tobias", "Linus"];
var stepChildren = ["Robin", "Morgan"];
var myChildren = myGirls.concat(myBoys, stepChildren, "Peter");
console.log(myChildren);
console.log(myGirls);

console.log(fruits.slice(1, 3));
console.log(fruits);

var numbers = [1, 34, -34, 56, 987, -567, 0];

function max(arr) {
    let max = -Infinity;
    arr.forEach(function(item) {
        if (item > max) {
            max = item;
        }
    });
    return max; 
}

function min(arr) {
    let min = Infinity;
    arr.forEach(function(item) {
        if (item < min) {
            min = item;
        }
    });
    return min; 
}

console.log(max(numbers));
console.log(min(numbers));