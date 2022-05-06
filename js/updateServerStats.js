var container = document.getElementById("num-vip");

// Get number of VIPs from JSON and displays it on home page
document.addEventListener("DOMContentLoaded", function(event) { 
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', '/vip.json');
    ourRequest.onload = function() {
        var ourData = JSON.parse(ourRequest.responseText);
        console.log(ourData.length);
        container.innerHTML = ourData.length + " VIPs"
    };
    ourRequest.send();
});