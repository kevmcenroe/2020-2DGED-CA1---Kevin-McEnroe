//'use strict' //throw an exception if a variable is used without being declared

window.addEventListener("load", Start);

/********************************* Game Engine Core Variables & Functions (Do Not Change in Your Game) *********************************/

//#region Variables
//get a handle to the canvas
var cvs = document.getElementById("main_canvas");

//get a handle to the 2D context of the canvas
var ctx = cvs.getContext("2d");

//stores elapsed and total game time
var gameTime = null;

//stores object manager which holds all sprites
var objectManager = null;
var soundManager = null;
var keyboardManager = null;

const cueArray = [
  new AudioCue("coin_pickup", 1, 1, false, 1),
  new AudioCue("gameover", 1, 1, false, 1),
  new AudioCue("gunshot", 1, 1, false, 0),
  new AudioCue("background", 1, 1, false, 0),
  //add more cues here but make sure you load in the HTML!
];

//#endregion

//#region Functions

//#region Start & Animate
function Start() {

  //instanticate GameTime
  gameTime = new GameTime();

  //Initialize all assets (sound, textures), load all sprites, load all managers
  Initialize();

  //start Update/Draw cycle i.e. start the game
  window.requestAnimationFrame(Animate);
}

function Animate(now) {
  //update game time
  gameTime.Update(now);

  //update all sprites whose state can change over time
  Update(gameTime);

  //draw all sprite
  Draw(gameTime);

  //request the next frame to repeat the update/draw cycle
  window.requestAnimationFrame(Animate);
}
//#endregion

//#region Update, Draw & Clear
function Update(gameTime) {

  //call object manager to update all sprites
  objectManager.Update(gameTime);

  if(keyboardManager.IsKeyDown(Keys.A)){
    console.log("A was pressed!");
    soundManager.Play("coin_pickup");
  }

  if(keyboardManager.IsKeyDown(Keys.D)){
    console.log("B was pressed!");
    soundManager.Play("gameover");
  }


  if(keyboardManager.IsKeyDown(Keys.Enter)){
    let element = document.getElementById("toast");
   element.style.display = "none";

   element = document.getElementById("countdown");
   element.style.display = "block";
   element.innerHTML = "Whatever we want!";
  }

  if(keyboardManager.IsKeyDown(Keys.S)){
    HTMLDom.RevealToast("lives", "Objectives....", 3000);
  }






}

function Draw(gameTime) {
  //clear previous draw
  ClearCanvas(Color.White);

  //call object manager to draw all sprites
  objectManager.Draw(gameTime);
}

function ClearCanvas(color) {
  ctx.save();
  ctx.fillStyle = color;
  ctx.fillRect(0, 0, cvs.clientWidth, cvs.clientHeight);
  ctx.restore();
}
//#endregion

//#endregion

/********************************* Game-Specific Variables & Functions (Change in Your Game) *********************************/
function Initialize() {

  //load managers
  objectManager = new ObjectManager();
  keyboardManager = new KeyboardManager();
  soundManager = new SoundManager(cueArray);

  //load texture assets

  //load sprites

  //add controller(s)
  
}


