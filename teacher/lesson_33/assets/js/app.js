// Bitwise operators

console.log((5).toString(2)); // 00000000000000000000000000000101
console.log((1).toString(2)); // 00000000000000000000000000000001
console.log(5 & 1);           // 00000000000000000000000000000001 = 1

console.log(5 | 2); // 7
// 00000000000000000000000000000101
// 00000000000000000000000000000010
// 00000000000000000000000000000111 = 7

console.log(~6);
// 00000000000000000000000000000110
// 11111111111111111111111111111001 = -7

function decToBin(dec) {
    return (dec >>> 0).toString(2);
}

function binToDec(bin) {
    return parseInt(bin, 2).toString(10);
}

console.log(decToBin(5));
console.log(binToDec('00000000000000000000000000000111'));

// Olma
// Olcha

// Ol(m|c)(a|h)a?

var fruit = "There is a olma";

console.log(fruit.search(/Ol(m|c)(a|h)a?/i));