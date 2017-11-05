
var url = chrome.extension.getURL('toolbar.html');
var height = "35px";
var iframe = "<iframe src ='"+url+"' id = 'myOwnCustomFirstToolbar' style='height:"+height+"'></iframe>";


$('html').append(iframe);

$('body').css({
   '-webkit-transform' : 'translateY('+height+')'
});

var button = document.querySelector('button');

button.onclick = function () {
    div = document.createElement('div');
    div.className = 'dinamicBlock';
    div.id = 'dinamicBlock';
    videoContent.appendChild(div);
    button.style.display = 'none';

    title = document.createElement('div');
    title.className = 'title';
    title.innerHTML = 'Title';
    dinamicBlock.appendChild(title);

    scroll = document.createElement('div');
    scroll.className = 'container';
    dinamicBlock.appendChild(scroll);

    blackShort = document.createElement('img');
    blackShort.className = 'dinamicImg';
    blackShort.setAttribute('src','img/blackShort.png');
    scroll.appendChild(blackShort);

    whiteShort = document.createElement('img');
    whiteShort.className = 'dinamicImg';
    whiteShort.setAttribute('src','img/DTI8674342446567.png');
    scroll.appendChild(whiteShort);

    platform = document.createElement('img');
    platform.className = 'dinamicImg';
    platform.setAttribute('src','img/DTI1086248738896.png');
    scroll.appendChild(platform);

    glasses = document.createElement('img');
    glasses.className = 'dinamicImg';
    glasses.setAttribute('src','img/DTI2338474646362.png');
    scroll.appendChild(glasses);

    sneakers = document.createElement('img');
    sneakers.className = 'dinamicImg';
    sneakers.setAttribute('src','img/DTI3777777774999.png');
    scroll.appendChild(sneakers);

    topic = document.createElement('img');
    topic.className = 'dinamicImg';
    topic.setAttribute('src','img/DTI5468290100775.png');
    scroll.appendChild(topic);

    amulet = document.createElement('img');
    amulet.className = 'dinamicImg';
    amulet.setAttribute('src','img/DTI5663626616118.png');
    scroll.appendChild(amulet);

    sandals = document.createElement('img');
    sandals.className = 'dinamicImg';
    sandals.setAttribute('src','img/DTI6104002222134.png');
    scroll.appendChild(sandals);

    redDress = document.createElement('img');
    redDress.className = 'dinamicImg';
    redDress.setAttribute('src','img/DTI8888888888888.png');
    scroll.appendChild(redDress);


    brassiere = document.createElement('img');
    brassiere.className = 'dinamicImg';
    brassiere.setAttribute('src','img/DTI9173635146171.png');
    scroll.appendChild(brassiere);

    brownDress = document.createElement('img');
    brownDress.className = 'dinamicImg';
    brownDress.setAttribute('src','img/DTI9999999999999.png');
    scroll.appendChild(brownDress);

    remove = document.createElement('button');
    remove.className = 'remove';
    title.appendChild(remove);
    remove.onclick = function(){
        videoContent.removeChild(div);
        button.style.display = 'block';

    }

}

