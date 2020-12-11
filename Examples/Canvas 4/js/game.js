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

var objectManager = null;

//start the loop
function Start() {

  var sprites = new Array();

//  sprites[110] = "niall";

  sprites[ActorType.Player] = new Array();
  sprites[ActorType.Pickup] = new Array();

  sprites[ActorType.Player].push("max");
  sprites[ActorType.Player].push("anna");
  sprites[ActorType.Player].push("bob");

  sprites[ActorType.Pickup].push("ammo 10");
  sprites[ActorType.Pickup].push("heart 50");
  sprites[ActorType.Pickup].push("plasma rifle 1000");

  for(var outerKey in sprites){
    let arr = sprites[outerKey];
    for(var innerKey in arr){
        console.log(arr[innerKey]);
    }
  }

  let pickupArray = sprites[ActorType.Enemies];
  for(var key in pickupArray)
  console.log('pickupArray[key] :>> ', pickupArray[key]);






  // var cities = new Array();

  // cities["tokyo"] = 1234;
  // cities["dublin"] = 12;
  // cities["london"] = 567;

  // for(var key in cities){
  //   console.log(key);
  // }

  // for(var key in cities){
  //   console.log(cities[key]);
  // }







  LoadManagers();
  LoadUI();
  LoadGameObject();

  //start Update/Draw cycle i.e. start the game
  window.requestAnimationFrame(Animate);
}

function LoadManagers(){
  objectManager = new ObjectManager(ctx);
}

function LoadGameObject(){

  var clonePlatform = null;

  var archetypalPlatformSprite = new Sprite("platform", ActorType.Platform, 
                        ctx, 120, 240, new RectangleArtist(25, 5, 2, "red"));

  for(let i = 1; i <= 15; i++){
      clonePlatform = archetypalPlatformSprite.Clone();
      //clonePlatform.artist.strokeStyle = "green";
      clonePlatform.x += 30 * i;
      clonePlatform.y -= 15 * i;
      objectManager.Add(clonePlatform);
  }
}

// function LoadGameObject(){
//   //  var artist = new TextArtist("10/20", "18px Arial");
//     var artist = new RectangleArtist(100, 10, 4, "blue");
    
//     scoreSprite = new Sprite("platform 1", ActorType.Platform, 
//                           ctx, 320, 30, artist);
  
//     var artist2 = new RectangleArtist(50, 10, 4, "red");
    
//     scoreSprite2 = new Sprite("platform 2", ActorType.Platform, 
//                                                 ctx, 260, 60, artist2);
//   }

function LoadUI(){

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

    objectManager.Draw();
}

// function Draw() {

//   ctx.save();
//   for(let i = 0; i < sprites.length; i++){
//     var sprite = sprites[i];
//       sprite.Draw();
//   }

//   // for(let sprite of sprites){
//   //   sprite.Draw();
//   // }
//   ctx.restore();
// }


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