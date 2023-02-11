const burger = document.getElementById('burgerIcon');
const overlay = document.getElementById('overlay')
const xmark = document.getElementById('xmark')

burger.addEventListener('click', openOverlay)
xmark.addEventListener('click', clsOverlay)

overlay.addEventListener('click', function () {
    overlay.style.width = '0%'
})

function openOverlay() {
    overlay.style.width = '100%'
}

function clsOverlay() {
    overlay.style.width = '0%'
}


// img slider

var slideImg = document.getElementById("slideImg");

var images = new Array(
    "images/support1.png",
    "images/support2.png"
);
let length = images.length;
let i = 0;

function slider() {
    if (i > length - 1) {
        i = 0;
    }
    slideImg.src = images[i];
    i++;
    setTimeout('slider()', 2000)
}

window.onload = slider()
