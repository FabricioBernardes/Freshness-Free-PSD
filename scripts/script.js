var selectslides=document.querySelectorAll("#slider > .hide-slide");
var selectdots=document.querySelectorAll("#dots-container > span");
var timer=setInterval (slideLoop, 3000);
var y=0;

function slideLoop (){
    y++;
    if (y>4){
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
    selectslides[0].classList.remove("show-slide");
    selectslides[1].classList.remove("show-slide");
    selectslides[2].classList.remove("show-slide");
    selectslides[3].classList.remove("show-slide");
    selectslides[4].classList.remove("show-slide");
    selectslides[y].classList.add("show-slide");

    selectdots[0].classList.remove("dot-click");
    selectdots[1].classList.remove("dot-click");
    selectdots[2].classList.remove("dot-click");
    selectdots[3].classList.remove("dot-click");
    selectdots[4].classList.remove("dot-click");
    selectdots[y].classList.add("dot-click");
}

selectslides[0].classList.add("show-slide");
selectdots[0].classList.add("dot-click");
