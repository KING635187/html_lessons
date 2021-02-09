
// Draw a Circle
var myCanvas = document.getElementById("myCanvas");
var myCtx = myCanvas.getContext("2d");
myCtx.beginPath();
myCtx.arc(95,50,40,0,2*Math.PI);
myCtx.stroke();

var youCanvas = document.getElementById("youCanvas");
var youCtx = youCanvas.getContext("2d");
// Create gradient
// var grd = youCtx.createLinearGradient(0,0,200,0);
// grd.addColorStop(0,"red");
// grd.addColorStop(1,"white");
// Fill with gradient
// youCtx.fillStyle = grd;
// youCtx.fillRect(10,10,150,80);

youCtx.font = "30px Arial";
youCtx.fillText("Hello World", 10, 50);