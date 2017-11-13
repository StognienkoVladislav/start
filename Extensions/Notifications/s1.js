
var options = {
  //type:"list",
  //type:"image",
  type:"basic",
  title:"My first popup with chrome",
  message:"some not useful message",
  iconUrl:"icon.png",
  //progress: 30
  //imageUrl:"icon.png",
  /*items: [{title:"Item1", message:"This is item 1."},
      {title:"Item2", message:"This is item 2."},
      {title:"Item3", message:"This is item 3."},
      {title:"Item4", message:"This is item 4."}]*/
};

chrome.notifications.create(options);

//function callback() {
//    console.log("popup done!");
//}

crome.notifications.onClicked.addListener(redirectWindow);

function redirectWindow() {
    alert("Hello man");
}