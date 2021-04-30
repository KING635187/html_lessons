// Errors

try {
    alerrt("Welcome");
}
catch(error) {
    document.getElementById("example-one").innerText = error;
}


function exampleTwo() {
    var message, number;
    message = document.getElementById("example-two-output");
    message.innerText = "";
    number = document.getElementById("example-two").value;

    try {
        if (number == "") throw "You must enter a number!";
        if (isNaN(number)) throw "You must enter a number!";
        number = Number(number);
        if (number < 5) throw "Too low";
        if (number > 10) throw "Too high"
    }
    catch(error) {
        message.innerText = error;
    }

}