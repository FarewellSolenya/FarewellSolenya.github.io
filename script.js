function onLoad(){
    var header = document.getElementById("myHeader");
    var body = document.getElementById("myContent");
    var offsetTop = header.offsetTop;
    var y = header.clientHeight;
    window.onscroll = function(){
        if (window.pageYOffset >= offsetTop) {
            header.classList.add("sticky");
            body.style.paddingTop = y +'px';
            
        } else {
            header.classList.remove("sticky");
            body.style.paddingTop = '0px';
        }
    };
};


