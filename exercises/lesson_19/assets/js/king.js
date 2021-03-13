var a = 5;
var b = 6;
var c = 7;
var s = (b + c + a)/2;
var area = Math.sqrt(s*((s-a)*(s-b)*(s-c )));
console.log(area)



function kopaytirish()
{
        num1 = document.getElementById("firstNumber").value;
        num2 = document.getElementById("secondNumber").value;
        document.getElementById("result").innerHTML = num1 * num2;
}

function bolish() 
{ 
        num1 = document.getElementById("firstNumber").value;
        num2 = document.getElementById("secondNumber").value;
document.getElementById("result").innerHTML = num1 / num2;
}
