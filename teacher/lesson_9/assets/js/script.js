var player = document.getElementById("player"),
    playBtn = document.getElementById("play"),
    zoomInBtn = document.getElementById("zoom-in"),
    zoomOutBtn = document.getElementById("zoom-out");

function toggleVideo() {
    if (player.paused) {
        player.play();
        playBtn.innerText = "Pause";
    } else { 
        player.pause();
        playBtn.innerText = "Play";
    }
}

function zoomIn() {
    var newWidth = parseFloat(window.getComputedStyle(player).getPropertyValue("width")) * 1.1;
    player.style.cssText = "width: " + newWidth + "px; height: " + newWidth / 16 * 9 + "px";
}

function zoomOut() {
    var newWidth = parseFloat(window.getComputedStyle(player).getPropertyValue("width")) * 0.9;
    player.style.cssText = "width: " + newWidth + "px; height: " + newWidth / 16 * 9 + "px";
}

var locationBox = document.getElementById("location-box");

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        locationBox.innerText = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    locationBox.innerHTML = "Latitude: " + position.coords.latitude + "<br/>Longitude: " + position.coords.longitude; 
}