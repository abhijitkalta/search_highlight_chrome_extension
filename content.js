(function(){
    "use strict";
    chrome.runtime.onMessage.addListener(function(message,sender,sendResponse){
    
        // message.searchText is the text input   
        var searchText = message.searchText;
        var patt = new RegExp(searchText, 'igm');
        var rep = "<span style='background-color: yellow'>" + searchText + "</span>";
        var element = document.body;
        element.innerHTML = element.innerHTML.replace(patt, rep);
    });
}());