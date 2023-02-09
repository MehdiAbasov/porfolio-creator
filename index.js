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

