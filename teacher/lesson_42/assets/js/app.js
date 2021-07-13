const validateForm = () => {
    var name = document.forms["myForm"]["name"].value;
    if (name == "") {
        alert("Name must be filled out");
        return false;
    }
}

<<<<<<< HEAD
const myFunction = () => {
    var inpObj = document.getElementById('id1');
    if (!inpObj.checkValidity()) {
        document.getElementById("demo").innerHTML = inpObj.validationMessage;
    }
}
=======
console.log(csvToArrayObjects('col1,col2\na,b\nc,d'));

>>>>>>> 197da2d5ba04342614864679a8dbd3355c052c66
