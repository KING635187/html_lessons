const validateForm = () => {
    var name = document.forms["myForm"]["name"].value;
    if (name == "") {
        alert("Name must be filled out");
        return false; 
    }
}