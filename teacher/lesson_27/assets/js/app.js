var numbers = [45, 67, 8, 9, 0];

var sum = numbers.reduceRight((total, value) => total + value);

console.log(sum);

var allOver18 = numbers.every(value => value > 18);

console.log(allOver18);

var someOver18 = numbers.some(value => value > 18);

console.log(someOver18);

var fruits = ["Apple", "Orange", "Apple", "Mango"];

console.log(fruits.indexOf("Mango"));
console.log(fruits.lastIndexOf("Apple"));

var first = numbers.find(value => value < 18);

console.log(first);

var firstIndex = numbers.findIndex(value => value < 5);

console.log(firstIndex);


////////// JS Math Object

console.log(Math.PI);
console.log(Math.E);
console.log(Math.SQRT2);
console.log(Math.SQRT1_2);
console.log(Math.LN2);
console.log(Math.LN10);
console.log(Math.LOG2E);
console.log(Math.LOG10E);

// 2 ** 3 = 8   log28 = 3


console.log(Math.round(1.49));

// 1.34 - 1 = 0.34     2 - 1.34 = 0.66

console.log(Math.ceil(3.5));
console.log(Math.floor(3.5));
console.log(Math.trunc(3.5));
console.log(Math.sign(3.5));
console.log(Math.pow(2, 3));
console.log(Math.sqrt(64));
console.log(Math.abs(-4.7));
console.log(Math.sin(90 * Math.PI / 180));
console.log(Math.cos(0 * Math.PI / 180));
console.log(Math.min(0, 150, 30, 20, -8, -200));
console.log(Math.max(0, 150, 30, 20, -8, -200));
console.log(Math.random());
console.log(Math.log(10));
console.log(Math.log2(8));
console.log(Math.log10(100));