function onLoad(){
    var header = document.getElementById("myHeader");
    var myContent = document.getElementById("myContent");
    var offsetTop = header.offsetTop;
    var y = header.clientHeight;
    window.onscroll = function(){
        if (window.pageYOffset >= offsetTop) {
            header.classList.add("sticky");
            myContent.style.paddingTop = y +'px';
            
        } else {
            header.classList.remove("sticky");
            myContent.style.paddingTop = '0px';
        }
    };
    myContent.innerHTML = document.getElementById("MainPage").innerHTML;
};
function MainPage(){
    myContent.innerHTML = document.getElementById("MainPage").innerHTML;
}
function InfoPage(){
    myContent.innerHTML = document.getElementById("InfoPage").innerHTML;
}
function ContactPage(){
    myContent.innerHTML = document.getElementById("ContactPage").innerHTML;
}
