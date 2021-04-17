// The Boolean() Function
function myFunction() {
    document.getElementById("demo").innerHTML = 10 > 9;
}

// JavaScript Boolean constructor Property
var bool = false;
document.getElementById("demo1").innerHTML = bool.constructor;

// JavaScript Boolean prototype Constructor
Boolean.prototype.myColor = function() {
    if (this.valueOf() == true) {
      return "green";
    } else {
      return "red";
    }
};
  
function myFunction2() {
    var a = true;
    document.getElementById("demo2").innerHTML = a.myColor();
}

// JavaScript Boolean toString() Method
function myFunction3() {
    var bool = true;
    var x = bool.toString()
    document.getElementById("demo3").innerHTML = typeof x;
}

// JavaScript Boolean valueOf() Method
function myFunction4() {
    var bool = false;
    var x = bool.valueOf();
    document.getElementById("demo4").innerHTML = x;
}