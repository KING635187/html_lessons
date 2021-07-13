const validateForm = () => {
    var name = document.forms["myForm"]["name"].value;
    if (name == "") {
        alert("Name must be filled out");
        return false;
    }
}

const myFunction = () => {
    var inpObj = document.getElementById('id1');
    if (!inpObj.checkValidity()) {
        document.getElementById("demo").innerHTML = inpObj.validationMessage;
    }
}