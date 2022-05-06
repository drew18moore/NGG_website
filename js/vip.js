var counter = 1;
var container = document.getElementById("content");

document.addEventListener("DOMContentLoaded", function(event) { 
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', '/vip.json');
    ourRequest.onload = function() {
        var ourData = JSON.parse(ourRequest.responseText);
        renderHTML(ourData);
        
    };
    ourRequest.send();
    counter++;
});

function renderHTML(data) {
    var htmlString = "";

    for (i = 0; i < data.length; i++) {
        htmlString += "<h3>" + data[i].steamID  + "</h3>" + "<h4><a href=\"" + data[i].steamURL + "\">" + data[i].steamURL + "</a>" + "</h4><hr>";
    }

    container.insertAdjacentHTML('beforeend', htmlString)
}