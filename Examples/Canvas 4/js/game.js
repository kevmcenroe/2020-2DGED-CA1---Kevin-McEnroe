'use strict'
window.addEventListener("load", Start);

/********************************* Game Engine Core Variables & Functions (Do Not Change in Your Game) *********************************/

//get a handle to the canvas
var cvs = document.getElementById("main_canvas");

//get a handle to the 2D context of the canvas
var ctx = cvs.getContext("2d");

//variables used by the game
var spriteSheet = null;
var scoreSprite = null;
var scoreSprite2 = null;

var clonePlatform1 = null, clonePlatform2 = null, clonePlatform3 = null;

//start the loop
function Start() {

  LoadUI();
  LoadGameObject();

  //start Update/Draw cycle i.e. start the game
  window.requestAnimationFrame(Animate);
}

function LoadUI(){

  var archetypalPlatformSprite = new Sprite("platform", ActorType.Platform, 
                        ctx, 120, 240, new RectangleArtist(20, 5, 2, "red"));

   clonePlatform1 = archetypalPlatformSprite.Clone();
   clonePlatform1.x += 25;
   clonePlatform1.y -= 20;

   clonePlatform2 = archetypalPlatformSprite.Clone();
   clonePlatform2.artist.strokeStyle = "green";
   clonePlatform2.x += 50;
   clonePlatform2.y -= 40;

   clonePlatform3 = archetypalPlatformSprite.Clone();
   clonePlatform3.artist.strokeStyle = "blue";
   clonePlatform3.x += 75;
   clonePlatform3.y -= 60;



}

// function LoadUI(){
//   //  var artist = new TextArtist("10/20", "18px Arial");
//     var artist = new RectangleArtist(100, 10, 4, "blue");
    
//     scoreSprite = new Sprite("platform 1", ActorType.Platform, 
//                           ctx, 320, 30, artist);
  
//     var artist2 = new RectangleArtist(50, 10, 4, "red");
    
//     scoreSprite2 = new Sprite("platform 2", ActorType.Platform, 
//                                                 ctx, 260, 60, artist2);
//   }

function LoadGameObject(){

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

  ctx.save();
  clonePlatform1.Draw();
  clonePlatform2.Draw();
  clonePlatform3.Draw();

  ctx.restore();
}


// function Draw() {

//   ctx.save();
//   //draw image
//   ctx.drawImage(spriteSheet, 140, 30, 62, 52, 0, 0, 100, 200);
//   ctx.restore();

//   //draw text?
//   ctx.font = "30px Arial";
//   ctx.fillText("Hello World", 320, 240);

//   //draw arc?
//   ctx.beginPath();
//   ctx.arc(400, 400, 50, 0, 2 * Math.PI);
//   ctx.stroke();


//   //draw rect?
//   ctx.strokeRect(200, 200, 150, 100);


// }

function ClearCanvas(color) {
  ctx.save();
  ctx.fillStyle = color;
  ctx.fillRect(0, 0, cvs.clientWidth, cvs.clientHeight);
  ctx.restore();
}