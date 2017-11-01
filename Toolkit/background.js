
chrome.contextMenus.create({

   title: " Twitter Social Toolkit",
   contexts:["selection"],
   onclick: myFunction

});


function myFunction() {
    alert("You just clicked me folk!")
}