(function(){
    'use strict';
    var backgroundpage = chrome.extension.getBackgroundPage();
    document.getElementById("searchButton").addEventListener( 'click', function() {
        var searchText = document.getElementById("searchText").value;
        
        //pass control to the event
        backgroundpage.handleButtonClick(searchText); 
    }); 
}());