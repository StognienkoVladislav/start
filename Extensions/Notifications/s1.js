
var options = {
  type:"basic",
  title:"My first popup with chrome",
  message:"some not useful message",
  iconUrl:"icon.png"
};

chrome.notifications.create(options, callback);

function callback() {
    console.log("popup done!");
}