// String methods

var str = "Hello World";
str.charAt(0);

console.log(str.charAt(6));

console.log(str.charCodeAt(0));

console.log(str[6]);

str[6] = 'D';

console.log(str);

// String ni arrayga o'zgartirish

var txt = "a b c d e";
console.log(txt.split(" "));

console.log(0.4 + 0.5);
console.log((0.4 * 10 + 0.2 * 10) / 10);

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.POSITIVE_INFINITY);
console.log(Number.NEGATIVE_INFINITY);
console.log(Number.NaN);

var sardorAge = 24,
    elbekAge = 32,
    murodAge = 14;

// console.log(sardorAge);
// console.log(elbekAge);
// console.log(murodAge);

var ages = [24, "Bu string", true, 4, 56, 76, 34.5, {name: 'Elbek', age: 24}];

// console.log(ages[0]);
// console.log(ages[1]);
// console.log(ages[2]);
var i = 0;
for (i; i < ages.length; i++) {
    console.log(ages[i]);
}

ages.forEach(function (age) {
    console.log(age);
});