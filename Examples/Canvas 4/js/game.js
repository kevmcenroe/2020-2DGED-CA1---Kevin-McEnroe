'use strict'

window.addEventListener("load", Start);

/********************************* Game Engine Core Variables & Functions (Do Not Change in Your Game) *********************************/

//get a handle to the canvas
var cvs = document.getElementById("main_canvas");

//get a handle to the 2D context of the canvas
var ctx = cvs.getContext("2d");

var spriteSheet = null;

//start the loop
function Start() {

  LoadAssets();


  //start Update/Draw cycle i.e. start the game
  window.requestAnimationFrame(Animate);
}

function LoadAssets(){
  LoadTextures();
}


function LoadTextures(){
  spriteSheet = document.getElementById("rasputin");
}


function Animate(now) {

  //update all sprites whose state can change over time
  Update();

  //draw all sprite
  Draw();

  //request the next frame to repeat the update/draw cycle
  window.requestAnimationFrame(Animate);
}

function Update() {
 
}

function Draw() {

  ctx.globalAlpha = 0.9;
  ctx.drawImage(spriteSheet, 140, 30, 62, 52, 0, 0, 100, 200);
}

function ClearCanvas(color) {
  ctx.save();
  ctx.fillStyle = color;
  ctx.fillRect(0, 0, cvs.clientWidth, cvs.clientHeight);
  ctx.restore();
}