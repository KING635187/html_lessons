var age = "5";

if (parseInt(age) === 5) {
    console.log("Pay 5.000");
} else {
    console.log("Pay 25.000");
}

var cars = ["BMW", "Lada", "Tesla"];

if (isArray(cars)) {
    console.log("Cars is array");
} else {
    console.log("Cars is not array");
}

function isArray(arr) {
    return arr.constructor.toString().indexOf('Array') > -1;
}