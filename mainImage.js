const body = document.querySelector("body");

const IMG_NUMBER = 3;
let randomNumber;


function paintImage(imgNmber) {
    const image = new Image();
    image.src = `./image/mainInfoImage.jpg` 
    image.classList.add("bgImage");
    body.prepend(image);
}

function init() {
    paintImage();
}

init();