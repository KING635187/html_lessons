// Errors

try {
    alerrrt("Welcome ");
} 
catch(error) {
    document.getElementById('example-one').innerText = error;
}

function exampleTwo() {
    var message, number;
    message = document.getElementById('example-two-output');
    message.innerText = '';
    input = document.getElementById('example-two');
    number = input.value;
    
    try {
        if (number == "") throw "You must enter a number!";
        if (isNaN(number)) throw "You must enter a number!";
        number = Number(number);
        if (number < 5) throw "Too low";
        if (number > 10) throw "Too high";
    } 
    catch(error) {
        message.innerText = error;
    }
    finally {
        input.value = "";
    }
}