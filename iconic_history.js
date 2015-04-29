'use strict';

function genFaviconDiv(){
	var faviconDiv = document.createElement('div');
	faviconDiv.className = "faviconDiv";
	return faviconDiv;
}

function addFaviconImg(item) {
    var faviconDiv = genFaviconDiv();
    var faviconTitle = item.title.replace(/\"/g, "");
    faviconDiv.innerHTML += '<a href="' + item.url + '"><img title="Title: ' + faviconTitle + '&#10;" class="favicon" src="' + item.favIconUrl + '"></img></a>';
    document.getElementById('faviconHolder').appendChild(faviconDiv);    
}

var testItem0 = {title: "CNN", url: "http://www.cnn.com", 
        favIconUrl: "http://www.cnn.com/favicon.ie9.ico" };
var testItem1 = {title: "wikipedia", url: "http://www.wikipedia.org/",
        favIconUrl: "http://bits.wikimedia.org/favicon/wikipedia.ico" };
var testItem2 = {title: "Yahoo", url: "https://www.yahoo.com/",
        favIconUrl: "https://s.yimg.com/rz/l/favicon.ico" };
var testItem3 = {title: "wework", url: "https://www.wework.com/",
        favIconUrl: "https://www.wework.com/favicon.ico" };

function genFavicons(){
    console.log("genFavicons");
    addFaviconImg(testItem0);
    addFaviconImg(testItem1);
    addFaviconImg(testItem2);
    addFaviconImg(testItem3);
}

document.addEventListener('DOMContentLoaded', genFavicons );