
// Lesson 1
var dey = new Date();
document.getElementById("demo").innerHTML = dey;


// Lesson 2
function printor() {
    window.print()
}


// Lesson 3
var dey = new Date();
document.getElementById("demo1").innerHTML = dey;


// Lesson 4 
var a = 5,
    b = 6,
    c = 7;
var d =a + b + c;

document.getElementById("demo2").innerHTML = d ;


// Lesson 5
const JSON_to_CSV = (arr, columns, delimiter = ',') =>
    [
        columns.join(delimiter),
        ...arr.map(obj =>
        columns.reduce(
            (acc, key) => `${acc}${!acc.length ? '' : delimiter}"${!obj[key] ? '' : obj[key]}"`,
            ''
            )
        )
    ].join('\n');

console.log(JSON_to_CSV([{ x: 100, y: 200 }, { x: 300, y: 400, z: 500 }, { x: 6 }, { y: 7 }], ['x', 'y']));
console.log(JSON_to_CSV([{ x: 100, y: 200 }, { x: 300, y: 400, z: 500 }, { x: 6 }, { y: 7 }], ['x', 'y'], ';'));

// Lesson 6
document.getElementById("demo4").innerText = "JSON";

// Lesson 7
const maydaluvchi = n => [...`${n}`].map(i => parseInt(i));

document.getElementById("demo5").innerHTML = (maydaluvchi(1234))

// Lesson 8
const pull = (arr, ...args) => {
    let argState = Array.isArray(args[0]) ? args[0] : args;
    let pulled = arr.filter((v, i) => !argState.includes(v));
    arr.length = 0;
    pulled.forEach(v => arr.push(v));
    return pulled;
};
let arry1 = ['П', 'р', 'а', 'и', 'в', 'з', 'е', 'т'];
document.getElementById("demo6").innerHTML = (pull(arry1, 'а', 'з'));

// Lesson 9
const powerset = arr => arr.reduce((a, v) => a.concat(a.map(r => [v].concat(r))), [[]]);

document.getElementById("demo7").innerHTML = (powerset(['1', '2', '3', '4']))


// Lesson 10 
const pull_at_Index = (arr, pullArr) => {
    let removed = [];
    let pulled = arr
      .map((v, i) => (pullArr.includes(i) ? removed.push(v) : v))
      .filter((v, i) => !pullArr.includes(i));
    arr.length = 0;
    pulled.forEach(v => arr.push(v));
    return removed;
};

let arra1 = ['a', 'b', 'c', 'd', 'e', 'f'];
console.log(pull_at_Index(arra1, [1, 3]));
let arra2 =  [1, 2, 3, 4, 5, 6, 7];
console.log(pull_at_Index(arra2, [4]));

// Lesson 11
document.getElementById("demo8").innerHTML = Math.floor(Math.random() * 1000000000000000 + 1) 

// // lesson 12
// function Clear() {
//     document.getElementById("demo9").innerText = ;
// }Could not establish connection. Receiving end does not exist.