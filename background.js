function handleButtonClick(searchText){
    
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      
    //pass the input to the content
    chrome.tabs.sendMessage(tabs[0].id, {searchText : searchText}, function(response) {
    
    });
  });

};

