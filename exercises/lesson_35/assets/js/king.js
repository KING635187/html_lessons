// JavaScript Form Validation
function validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
}

// JavaScript Can Validate Numeric Input
function myFunction1() {
    var x, text;
  
    // Get the value of the input field with id="numb"
    x = document.getElementById("numb").value;
  
    // If x is Not a Number or less than one or greater than 10
    if (isNaN(x) || x < 1 || x > 10) {
      text = "Input not valid";
    } else {
      text = "Input OK";
    }
    document.getElementById("demo").innerHTML = text;
}

// Constraint Validation DOM Methods
function myFunction() {
    var inpObj = document.getElementById("id1");
    if (!inpObj.checkValidity()) {
      document.getElementById("demo1").innerHTML = inpObj.validationMessage;
    } else {
      document.getElementById("demo1").innerHTML = "Input OK";
    } 
} 

// Examples
function myFunction2() {
    var txt = "";
    if (document.getElementById("id2").validity.rangeUnderflow) {
      txt = "Value too small";
    } else {
      txt = "Input OK";
    } 
    document.getElementById("demo2").innerHTML = txt;
}
