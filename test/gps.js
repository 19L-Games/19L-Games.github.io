var a;
var nd;
var b;
var pfd;
var pos;

function setup() {
a = document.getElementById("1");
pfd = a.getContext("2d");

b = document.getElementById("2");
nd = b.getContext("2d");

setInterval(refreshDisplay, 50)
}

function refreshDisplay() {
pfd.fillStyle = "rgb(0,0,0)";
nd.fillStyle = "rgb(0,0,0)";

pfd.fillRect(0,0,400,400);
nd.fillRect(0,0,400,400);

}

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.watchPosition(updatePos);
  } else {
    console.log("location faield");
  }
}

function updatePos(position) {
pos	= {
lat:position.coords.latitude,
lon:position.coords.longitude,
alt:position.coords.altitude / 0.3048,
hdg:position.coords.heading,
acc:position.coords.accuracy,
spd:position.coords.speed * 900 / 463,
t:position.timestamp 
}
}