//canvas context
let canvas = document.getElementById("mainScreen");
let context = canvas.getContext('2d');

//image
let ghostImage = document.getElementById('ghostImg');

let lastTime = 0;

let xPosition = 200;
let speed = 5;

function animationLoop(timeStamp) {
    let deltaTime = timeStamp - lastTime;
    lastTime = timeStamp;

    if (xPosition > 970) {
        speed = -5;
    } else if (xPosition < 0) {
        speed = 5;
    }
    //clear canvas
    context.clearRect(0, 0, 1170, 400);

    //drawImage
    context.drawImage(ghostImage, xPosition, 100, 200, 200);

    xPosition += speed;
    console.log(xPosition);
    requestAnimationFrame(animationLoop);
}

animationLoop();