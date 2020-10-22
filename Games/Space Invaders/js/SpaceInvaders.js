window.addEventListener("load", loadGame);
//get a handle to the canvas
var cvs = document.getElementById("main_canvas");

//get a handle to the 2D context of the canvas
var ctx = cvs.getContext("2d");

//game variables

function loadGame() {
    //add game primitive
    initializeGame();

    //start update/draw cycle
    window.requestAnimationFrame(animate);
}

function initializeGame() {

    //images and sound
    loadAssets();
}

function loadAssets(){
    this.backgroundSpriteSheet = document.getElementById("invaders_background");
    this.spriteSheet = document.getElementById("invaders_sprite_sheet");
}

function animate() {
    update();
    draw();
    window.requestAnimationFrame(animate);
}

function update() {

}
var sx = 0, sy = 0;
var sWidth = 22;
var sHeight = 17;
function draw() {
    clearCanvas("rgb(255, 0, 0)");

   // ctx.drawImage(this.backgroundSpriteSheet, 0, 0, 480, 640);
    //ctx.drawImage(this.backgroundSpriteSheet, 400, 700, 100, 100, 0, 0, 480, 640);

    //

    //1st frame
    sy=0;
    ctx.drawImage(this.spriteSheet, sx, sy, sWidth, sHeight, 0, 0, 50, 50);

    sy=18;
    ctx.drawImage(this.spriteSheet, sx, sy, sWidth, sHeight, 0, 0, 50, 50);

}

function clearCanvas(color) {
    ctx.save();
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, cvs.clientWidth, cvs.clientHeight);
    ctx.restore();
}
