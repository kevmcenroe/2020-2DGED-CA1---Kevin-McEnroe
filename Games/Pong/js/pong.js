//get a handle to the canvas
var cvs = document.getElementById("main_canvas");

//get a handle to the 2D context of the canvas
var ctx = cvs.getContext("2d");

window.addEventListener("load", loadGame);

var pongBall, pongPaddleL, pongPaddleR;

function loadGame(){
    //add game primitive
    initializeGame();
    //start update/draw cycle
    window.requestAnimationFrame(animate);
}

function initializeGame(){
    pongBall = new Arc(320, 240, 20, 0, Math.PI * 2);
}

function animate(){
    update();
    draw();  
    window.requestAnimationFrame(animate);
}

function update(){
    //first time in, set the ball in a random direction
    //Math.random();
    //Math.floor();

    this.pongBall.x += 1;
    this.pongBall.y += 0.25;
}
function draw(){
    clearCanvas("rgb(255, 255, 241)");
    pongBall.draw(ctx, 2, "red", "black", false);
}

function clearCanvas(color){
    ctx.save();
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, cvs.clientWidth, cvs.clientHeight);
    ctx.restore();
}
