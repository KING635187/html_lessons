
// Draw a Circle
var myCanvas = document.getElementById("myCanvas");
var myCtx = myCanvas.getContext("2d");
myCtx.beginPath();
myCtx.arc(95,50,40,0,2*Math.PI);
myCtx.stroke();

<<<<<<< HEAD:exercises/lesson_7/asseds/js/script.js


var youCanvas = document.getElementById("youCanvas");
var you = c.getContext("2d");
ctx.font = "30px Arial";
ctx.fillText("Hello World",10,50);

//var c = document.getElementById("youCanvas");
//var ctx = c.getContext("2d");
=======
var youCanvas = document.getElementById("youCanvas");
var youCtx = youCanvas.getContext("2d");
>>>>>>> 9ffd98f2972639be7bd391a861f5f919c04fcc34:exercises/lesson_seven/asseds/js/script.js
// Create gradient
// var grd = youCtx.createLinearGradient(0,0,200,0);
// grd.addColorStop(0,"red");
// grd.addColorStop(1,"white");
// Fill with gradient
// youCtx.fillStyle = grd;
// youCtx.fillRect(10,10,150,80);

youCtx.font = "30px Arial";
youCtx.fillText("Hello World", 10, 50);