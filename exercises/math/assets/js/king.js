//  More Examples
function myFunction() {
    var a = Math.abs(7.25);
    var b = Math.abs(-7.25);
    var c = Math.abs(null);
    var d = Math.abs("Hello");
    var e = Math.abs(2+3);
  
    var x = a + "<br>" + b + "<br>" + c + "<br>" + d + "<br>" + e;
    document.getElementById("demo").innerHTML = x;
    
}

// JavaScript acos() Method
function myFunction1() {
    document.getElementById("demo1").innerHTML = Math.acos(0.5);
}

// JavaScript acosh() Method
function myFunction2() {
    document.getElementById("demo2").innerHTML = Math.acosh(2);
}

// JavaScript asin() Method
function myFunction3() {
    document.getElementById("demo3").innerHTML = Math.asin(0.5);
}

// JavaScript asinh() Method
function myFunction4() {
    document.getElementById("demo4").innerHTML = Math.asinh(1);
}

// JavaScript atan() Method
function myFunction5() {
    document.getElementById("demo5").innerHTML = Math.atan(2);
}

// JavaScript atan2() Method
function myFunction6() {
    document.getElementById("demo6").innerHTML = Math.atan2(8, 4);
}

// JavaScript atanh() Method
function myFunction7() {
    document.getElementById("demo7").innerHTML = Math.atanh(0.5);
}

// JavaScript cbrt() Method
function myFunction8() {
    document.getElementById("demo8").innerHTML = Math.cbrt(125);
}

// JavaScript ceil() Method
function myFunction9() {
    document.getElementById("demo9").innerHTML = Math.ceil(1.4);
}

// JavaScript cos() Method
function myFunction10() {
    document.getElementById("demo10").innerHTML = Math.cos(3);
}

// JavaScript cosh() Method
function myFunction11() {
    document.getElementById("demo11").innerHTML = Math.cosh(3);
}

// JavaScript exp() Method
function myFunction12() {
    document.getElementById("demo12").innerHTML = Math.exp(3);
}

// JavaScript floor() Method
function myFunction13() {
    document.getElementById("demo13").innerHTML = Math.floor(1.6);
}

// JavaScript log() Method
function myFunction14() {
    document.getElementById("demo14").innerHTML = Math.log(2);
}

// JavaScript max() Method
function myFunction15() {
    document.getElementById("demo15").innerHTML = Math.max(5, 10);
}

// JavaScript min() Method
function myFunction16() {
    document.getElementById("demo16").innerHTML = Math.min(5, 10);
}

// JavaScript pow() Method
function myFunction17() {
    document.getElementById("demo17").innerHTML = Math.pow(4, 3);
}

// JavaScript random() Method
function myFunction18() {
    var x = document.getElementById("demo18")
    x.innerHTML = Math.floor((Math.random() * 100) + 1);
}

// JavaScript round() Method
function myFunction19() {
    var a = Math.round(2.60);
    var b = Math.round(2.50);
    var c = Math.round(2.49);
    var d = Math.round(-2.60);
    var e = Math.round(-2.50);
    var f = Math.round(-2.49);
  
    var x = a + "<br>" + b + "<br>" + c + "<br>" + d + "<br>" + e + "<br>" + f;
    document.getElementById("demo19").innerHTML = x; 
}

// JavaScript sign() Method
function myFunction20() {
    var a = Math.sign(3);
    var b = Math.sign(-3);
    var c = Math.sign(0);
    
    var x = a + "<br>" + b + "<br>" + c;
    document.getElementById("demo20").innerHTML = x;
}

// JavaScript sin() Method
function myFunction21() {
    var a = Math.sin(3);
    var b = Math.sin(-3);
    var c = Math.sin(0);
    var d = Math.sin(Math.PI);
    var e = Math.sin(Math.PI / 2);
  
    var x = a + "<br>" + b + "<br>" + c + "<br>" + d + "<br>" + e;
    document.getElementById("demo21").innerHTML = x;
}

// JavaScript sqrt() Method
function myFunction22() {
    var a = Math.sqrt(0);
    var b = Math.sqrt(1);
    var c = Math.sqrt(9);
    var d = Math.sqrt(64);
    var e = Math.sqrt(-9);
  
    var x = a + "<br>" + b + "<br>" + c + "<br>" + d + "<br>" + e;
    document.getElementById("demo22").innerHTML = x;
}

// JavaScript sinh() Method
function myFunction23() {
    document.getElementById("demo23").innerHTML = Math.sinh(3);
}

// JavaScript tan() Method
function myFunction24() {
    document.getElementById("demo24").innerHTML = Math.tan(1);
}

// JavaScript tanh() Method
function myFunction25() {
    document.getElementById("demo25").innerHTML = Math.tanh(1);
}

// JavaScript trunc() Method
function myFunction26() {
    document.getElementById("demo26").innerHTML = Math.trunc(8.76);
}