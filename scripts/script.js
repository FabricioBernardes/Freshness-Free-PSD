var x=document.querySelectorAll("#slider > .hide-slide");
var y=document.querySelectorAll("#dots-container > span");


x[0].classList.add("show-slide");
y[0].classList.add("dot-click");



function slideselect (n) {
    x[0].classList.remove("show-slide");
    x[1].classList.remove("show-slide");
    x[2].classList.remove("show-slide");
    x[3].classList.remove("show-slide");
    x[4].classList.remove("show-slide");
    x[n].classList.add("show-slide");

    y[0].classList.remove("dot-click");
    y[1].classList.remove("dot-click");
    y[2].classList.remove("dot-click");
    y[3].classList.remove("dot-click");
    y[4].classList.remove("dot-click");
    y[n].classList.add("dot-click");
}