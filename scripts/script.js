/*-------------Hamburguer menu-------------------*/
var getMenu = document.getElementById("nav-menu");
var media = window.matchMedia("(max-width: 660px)");

function myFunction(media) {
    if (media.matches) {
        getMenu.style.display = "none";        
    } 
    else {
        getMenu.style.display = "flex";
    }
}

function navMenu() {
    if (getMenu.style.display === "flex") {
        getMenu.style.display = "none";
    } else {
        getMenu.style.display = "flex";
    }
}

myFunction(media);
media.addListener(myFunction);

/*-------------Slider-------------------*/
var selectslides=document.querySelectorAll("#slider > .hide-slide");
var selectdots=document.querySelectorAll("#dots-container > span");
var timer=setInterval (slideLoop, 3000);
var y=0;

function slideLoop (){
    y++;
    if (y>selectslides.length-1){
        y=0;
    }
    changeSlide (y);
}

function clickDot (n) {
    y=n;
    changeSlide (y);
    clearInterval (timer);
    timer=setInterval (slideLoop, 3000);
}

function changeSlide (y) {
    for (var i=0; i<selectslides.length; i++){
    selectslides[i].classList.remove("show-slide");
    selectdots[i].classList.remove("dot-click");
    }
    selectslides[y].classList.add("show-slide");
    selectdots[y].classList.add("dot-click");
}

selectslides[0].classList.add("show-slide");
selectdots[0].classList.add("dot-click");