var arcCanvas = document.getElementById("arc-canvas");
var arcContext = arcCanvas.getContext("2d");
arcContext.beginPath();
arcContext.arc(120, 120, 100, 0.5 * Math.PI, 1 * Math.PI, true);
arcContext.stroke();


var textCanvas = document.getElementById("text-canvas");
var textContext = textCanvas.getContext("2d");
textContext.font = "30px Arial";
textContext.fillText("Hello World", 40, 40);
textContext.strokeText("Hello World", 120, 120);


var gradientCanvas = document.getElementById("gradient-canvas");
var gradinetContext = gradientCanvas.getContext("2d");

// Create gradient
var gradient = gradinetContext.createLinearGradient(0, 0, 200, 45);
gradient.addColorStop(1, "red");
gradient.addColorStop(0, "black");

// Fill with gradient
gradinetContext.fillStyle = gradient;
gradinetContext.fillRect(10, 10, 150, 80);


function drawImage() {
    var imageCanvas = document.getElementById("image-canvas");
    var imageContext = imageCanvas.getContext("2d");
    var image = document.getElementById("scream");
    imageContext.drawImage(image, 10, 10);
}