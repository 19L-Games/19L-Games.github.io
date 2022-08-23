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

text()
}
function text() {
	pfd.fillStyle = nd.fillStyle = "#00ff00";
	pfd.font = nd.font = "18px Arial";
	
	pfd.fillText("alt " + pos.alt , 10,20);
	pfd.fillText("spd " + pos.spd , 10,40);
	
	nd.fillText(pos.lat, 10,20);
	nd.fillText(pos.lon, 10,40);
	nd.fillText(pos.hdg,10,80);
	nd.fillText(pos.acc, 10,100);
	nd.fillText(pos.t,10,120);
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