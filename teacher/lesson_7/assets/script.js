var canvas = document.getElementById("painter");
var context = canvas.getContext("2d");
var x = null;
var y = null;

canvas.addEventListener("mousemove", function(event) {
    x = event.pageX;
    y = event.pageY;
});

canvas.addEventListener("mousedown", function() {
    context.moveTo(x, y);
});

canvas.addEventListener("mouseup", function() {
    context.lineTo(x, y);
    context.stroke();
});