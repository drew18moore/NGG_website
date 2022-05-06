var container = document.getElementById("num-vip");
var container1 = document.getElementById("num-players");

// Get number of VIPs from JSON and displays it on home page
document.addEventListener("DOMContentLoaded", function(event) { 
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', './vip.json');
    ourRequest.onload = function() {
        var ourData = JSON.parse(ourRequest.responseText);
        console.log(ourData.length);
        container.innerHTML = ourData.length + " VIPs"
    };
    ourRequest.send();

    var ourRequest1 = new XMLHttpRequest();
    ourRequest1.open('GET', './players.json');
    ourRequest1.onload = function() {
        var ourData1 = JSON.parse(ourRequest1.responseText);
        console.log(ourData1.length);
        container1.innerHTML = ourData1.length + " Players"
    };
    ourRequest1.send();
});