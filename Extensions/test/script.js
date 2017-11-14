window.onload = function () {
    document.getElementById("save").onclick=function () {
      var value = document.getElementById("saveLine").value;
      alert(value);

      var url = chrome.extension.getURL('buttonPlagin.html');
      var height = "500px";
      var width = "242px";
      var iframe = "<iframe src ='"+url+"' style='height:"+height+"; width:"+width+";'></iframe>";

      $('html').append(iframe);
      $('body').css({
          '-webkit-transform' : 'translateZ('+height+')'
      });

      chrome.tabs.create({url: chrome.extension.getURL('demo.html')});


    };
};
