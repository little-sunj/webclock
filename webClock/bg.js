const body = document.querySelector("body");
const IMG_NUMBER = 3;

function handleImageLoad() {

}
function paintImage(imgNum) {
    const image = new Image();
    image.src = `${imgNum + 1}.jpg`;
    image.classList.add("bgImage");
    body.appendChild(image);
 
}
function getRandom() {
    const number = Math.floor(Math.random()*3);
    return number;
}
function init() {

    const randomNumber = getRandom();
    paintImage(randomNumber);
}

init();