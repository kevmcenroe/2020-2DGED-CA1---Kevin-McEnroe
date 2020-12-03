window.addEventListener("load", Start);

/********************************* Game Engine Core Variables & Functions (Do Not Change in Your Game) *********************************/

//get a handle to the canvas
var cvs = document.getElementById("main_canvas");

//get a handle to the 2D context of the canvas
var ctx = cvs.getContext("2d");

var movingRectXPos = 20, movingRectYPos = 20;
var moveIncrement = 4;

//start the loop
function Start() {
  //start Update/Draw cycle i.e. start the game
  window.requestAnimationFrame(Animate);
}

//Pascal e.g. GetTime or Camel e.g. getTime
function Animate(currentTimeInMs) {

  //update all sprites whose state can change over time
  Update(currentTimeInMs);

  //draw all sprite
  Draw(currentTimeInMs);

  //request the next frame to repeat the update/draw cycle
  window.requestAnimationFrame(Animate);
}

function Update(currentTimeInMs) {

  UpdateMovingRect(currentTimeInMs);
}

function UpdateMovingRect(currentTimeInMs){
  movingRectXPos += moveIncrement;
  //make decisions about state of objects here...
  if(movingRectXPos > cvs.clientWidth - 150)
    moveIncrement *= -1;
  else if(movingRectXPos < 0)
    moveIncrement *= -1;
}


function Draw(currentTimeInMs) {
  ClearCanvas("rgb(187, 251, 209)");
  DrawMovingRect(currentTimeInMs);

}

function DrawMovingRect(currentTimeInMs){
  ctx.lineWidth = 5;
  ctx.strokeStyle = "yellow";
  ctx.strokeRect(movingRectXPos, movingRectYPos, 150, 100);
}

function ClearCanvas(color) {
  ctx.save();
  ctx.fillStyle = color;
  ctx.fillRect(0, 0, cvs.clientWidth, cvs.clientHeight);
  ctx.restore();
}