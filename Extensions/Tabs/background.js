chrome.browserAction.onClicked.addListener(function () {
    //chrome.tabs.create({url:'http://google.com'});
    //chrome.tabs.create({url: chrome.extension.getURL('yourFileNamehere.html')});
    chrome.tabs.executeScript();
});

