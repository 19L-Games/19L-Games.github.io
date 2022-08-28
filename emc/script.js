var x = document.getElementById("x");
var z = document.getElementById("z");
var dataget;
var data;

function getRemote(remote_url) {
    return $.ajax({
        type: "GET",
        url: remote_url,
        async: false
    }).responseText;
}

dataget = getRemote("https://earthmc.net/map/aurora/up/world/earth/");
data = JSON.parse(dataget);