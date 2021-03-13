var x = 5 ** 2;
var y = 17 % 6;

console.log("X is: " + x + ". Y is: " +  y);

y++
x--

console.log("X is: " + x + ". Y is: " +  y);

let a = 24, b = "24", c = 45;

console.log(a == b);
console.log(a === b);
console.log(a != b);
console.log(a !== b);
console.log(a > c);
console.log(a < c);
console.log(a <= b);
console.log(a >= c);
console.log((a > c) ? "Katta" : "Kichik");

console.log(a == b && a > c);
console.log(a == b || a > c);
console.log(!(a == b));

console.log(typeof a);
console.log(b instanceof Number);
console.log("a".charCodeAt(0).toString(2));

console.log(medium([2, 4, 6, 34, 56, 778]));
console.log(medium([34, 567, 98987, 34, 1, -23, -67]));

function medium(numbers) {
    var sum = 0, i;
    for (i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum / numbers.length;
}

console.log(medium);

let sum = "1, 2, 3 va 4 ning o'rtacha qiymati " +
    medium([1, 2, 3, 4]) + " ga teng!";

console.log(sum);