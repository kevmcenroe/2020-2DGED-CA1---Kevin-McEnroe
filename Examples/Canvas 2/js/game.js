window.addEventListener("load", Start);

/********************************* Game Engine Core Variables & Functions (Do Not Change in Your Game) *********************************/

//get a handle to the canvas
var cvs = document.getElementById("main_canvas");

//get a handle to the 2D context of the canvas
var ctx = cvs.getContext("2d");

var posX = 20, posY = 20;
var moveIncrement = 1;

//start the loop
function Start() {
  //start Update/Draw cycle i.e. start the game
  window.requestAnimationFrame(Animate);

  console.log('cvs.clientWidth :>> ', cvs.clientWidth);
}

//Pascal e.g. GetTime or Camel e.g. getTime
function Animate(currentTimeInMs) {

 // console.log("animating..." + Math.round(currentTimeInMs/1000));

  //update all sprites whose state can change over time
  Update(currentTimeInMs);

  //draw all sprite
  Draw(currentTimeInMs);

  //request the next frame to repeat the update/draw cycle
  window.requestAnimationFrame(Animate);
}

function Update(currentTimeInMs) {
  posX += moveIncrement;
}

function Draw(currentTimeInMs) {

  ClearCanvas("rgb(187, 251, 209)");
  ctx.lineWidth = 5;
  ctx.strokeStyle = "yellow";
  ctx.strokeRect(posX, posY, 150, 100);

  // ctx.fillStyle = "red";
  // ctx.fillRect(20, 20, 150, 100);



}

function ClearCanvas(color) {
  ctx.save();
  ctx.fillStyle = color;
  ctx.fillRect(0, 0, cvs.clientWidth, cvs.clientHeight);
  ctx.restore();
}