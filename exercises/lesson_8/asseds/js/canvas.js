var canvas = document.getElementById("myCanvas");
var king = canvas.getContext("2d");
king.fillStyle = "#FF0000";
king.fillRect(0,0,250,200);

var canvas = document.getElementById("youCanvas");
var lion = canvas.getContext("2d")
lion.moveTo(0, 0);
lion.lineTo(250, 200);
lion.stroke();