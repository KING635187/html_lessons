


const clearButton = document.getElementById('clear'),
    additionButtons = document.getElementsByClassName('addition'),
    calculateButton = document.getElementById('calculate');
var output = document.getElementById('output');

[...additionButtons].map(function (additionButton) {
    additionButton.addEventListener('click', function (event) {
        const text = event.currentTarget.innerText;
        if (new RegExp('[0-9]$').test(output.value)) {
            show(text);
        } else if (output.value === '' && new RegExp('[0-9]').test(text)) {
            show(text);
        } else if (new RegExp('[^0-9]$').test(output.value) && new RegExp('[0-9]').test(text)) {
            show(text);
        }
    });
});
clearButton.addEventListener('click', clear);
calculateButton.addEventListener('click', calculate);

function show(text) {
    output.value += text;
}

function calculate() {
    const expressionString = output.value;
    output.value = eval(expressionString);
}

function clear() {
    output.value = '';
}