"use strict"; //throw an exception if a variable is used without being declared

window.addEventListener("load", Start);

/********************************* Game Engine Core Variables & Functions (Do Not Change in Your Game) *********************************/

//#region Core Variables [DO NOT CHANGE]
//get a handle to the canvas
var cvs = document.getElementById("main_canvas");

//get a handle to the 2D context of the canvas
var ctx = cvs.getContext("2d");

//stores elapsed and total game time
var gameTime = null;

//managers
var objectManager = null;
var soundManager = null;
var keyboardManager = null;

//debug
var debugDrawer = null;

//#endregion

//#region Functions

//#region Start & Animate
function Start() {
  //instanticate GameTime
  gameTime = new GameTime();

  //load managers
  LoadManagers();

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


/**
 * Loads the code managers used by the game (object, keyboard, sound)
 */
function LoadManagers() {
  objectManager = new ObjectManager(ctx, StatusType.Drawn);
  keyboardManager = new KeyboardManager();
  soundManager = new SoundManager(cueArray);
}

//#endregion

//#region Update, Draw & Clear
function Update(gameTime) {
  //call object manager to update all sprites
  objectManager.Update(gameTime);

  //Check for menu, win/lose, sound events
  HandleInput(gameTime);

  //update scores on the UI
  UpdateUI(gameTime);
}

function Draw(gameTime) {
  //if we add a pattern or animate the canvas then we shouldnt clear the background
  ClearCanvas(Color.White);

  //call object manager to draw all sprites
  objectManager.Draw(gameTime);

  if(debugDrawer)
    debugDrawer.Draw(gameTime);
}

function ClearCanvas(color) {
  ctx.save();
  ctx.fillStyle = color;
  ctx.fillRect(0, 0, cvs.clientWidth, cvs.clientHeight);
  ctx.restore();
}

function LoadDebug(bDebugEnabled) {
  if(bDebugEnabled)
    debugDrawer = new DebugDrawer("shows debug info", StatusType.Update | StatusType.Drawn, ctx, objectManager);
}
//#endregion

//#endregion

/********************************* Game-Specific Variables & Functions (Change in Your Game) *********************************/
//#region Game Specific Variables [CHANGE FOR YOUR GAME]
//stores object manager which holds all sprites

const cueArray = [
  new AudioCue("coin_pickup", 1, 1, false, 1),
  new AudioCue("gameover", 1, 1, false, 1),
  new AudioCue("gunshot", 1, 1, false, 0),
  new AudioCue("background", 1, 1, true, 0),
  //add more cues here but make sure you load in the HTML!
];

var lives = 5;
var score = 0;
//#endregion

function Initialize() {

  //debug drawer to show bounding rect or circle around collidable sprites
  LoadDebug(true);

  //load sprites
  LoadSprites();
}

function UpdateUI(gameTime){
  var scoreElement = document.getElementById("ui_score");
  if(scoreElement){
      scoreElement.style.display = "block";
      scoreElement.innerHTML = score;
  }
}


/**
 * Use this function to check for keyboard or mouse input and start the game, mute sounds,
 * show/hide UI elements
 *
 * @param {*} gameTime
 */
function HandleInput(gameTime) {

  //is the game starting
  if (keyboardManager.IsKeyDown(Keys.Enter)) {
    StartGame(gameTime);
  }

  //add more code to check for input (e.g. O for Objective)

  //is score == 0
    //sound
    //show div
    //pause object manager
}

function StartGame(gameTime){

  //set any win/lose variables
  var livesElement = document.getElementById("ui_lives");
  livesElement.style.display = "block";
  livesElement.innerHTML = "<strike>hello</strike> - " + lives + "/5";

  var scoreElement = document.getElementById("ui_score");
  scoreElement.style.display = "block";
  scoreElement.innerHTML = score;

  //Hide "Press Enter"
  document.getElementById("menu_opening").style.display = "none";

  //unpause game
  objectManager.StatusType = StatusType.Drawn | StatusType.Updated;

  //play sound
  soundManager.Play("background");
}

function LoadSprites() {
  LoadPlayerSprite();
  LoadPlatformSprites();
  LoadBackgroundSprites();

  //to do...
  LoadPickupSprites();
  //LoadEnemySprites();
}

function LoadBackgroundSprites() {
  var backgroundData = SpriteData.BACKGROUND_DATA;

  for (let i = 0; i < backgroundData.length; i++) {
    let spriteArtist = new SpriteArtist(
      ctx,
      backgroundData[i].spriteSheet,
      backgroundData[i].alpha,
      backgroundData[i].sourcePosition,
      backgroundData[i].sourceDimensions
    );

    let transform = new Transform2D(
      backgroundData[i].translation,
      backgroundData[i].rotation,
      backgroundData[i].scale,
      backgroundData[i].origin,
      new Vector2(cvs.clientWidth, cvs.clientHeight)
    );

    objectManager.Add(
      new Sprite(
        backgroundData[i].id,
        backgroundData[i].actorType,
        StatusType.Updated | StatusType.Drawn,
        transform,
        spriteArtist,
        backgroundData[i].layerDepth
      ));
  }
}

function LoadPlatformSprites() {
  var platformData = SpriteData.PLATFORM_DATA;

  let spriteArtist = new SpriteArtist(
    ctx,
    platformData.spriteSheet,
    platformData.alpha,
    platformData.sourcePosition,
    platformData.sourceDimensions
  );

  let transform = new Transform2D(
    platformData.translationArray[0],
    platformData.rotation,
    platformData.scale,
    platformData.origin,
    platformData.sourceDimensions
  );

  let platformSprite = new Sprite(
    platformData.id,
    platformData.actorType,
    StatusType.Updated | StatusType.Drawn,
    transform,
    spriteArtist
  );

  let clone = null;
  for (let i = 0; i < platformData.translationArray.length; i++) {
    clone = platformSprite.Clone();
    clone.Transform2D.Translation = platformData.translationArray[i];
    clone.collisionPrimitive = new RectCollisionPrimitive(clone.Transform2D, 0);
    objectManager.Add(clone);
  }
}


function LoadPlayerSprite() {

  //step 1 - create AnimatedSpriteArtist
  var takeName = "run_right";
  var artist = new AnimatedSpriteArtist(ctx, SpriteData.RUNNER_ANIMATION_DATA);

  //step 2 - set initial take
  artist.SetTake(takeName);

  //step 3 - create transform and use bounding box from initial take (this is why we make AnimatedSpriteArtist before Transform2D)
  let transform = new Transform2D(
    SpriteData.RUNNER_START_POSITION,
    0,
    Vector2.One,
    Vector2.Zero,
    artist.GetSingleFrameDimensions("run_right"),
    0
  );

  //step 4 - create the CollidableSprite which adds Body which allows us to test for collision and add gravity
  let playerSprite = new CollidableSprite(
    "player",
    ActorType.Player,
    StatusType.Updated | StatusType.Drawn,
    transform,
    artist,
    1
  );

  //step 5 - set performance characteristics of the body attached to the moveable sprite
  playerSprite.Body.MaximumSpeed = 6;
  playerSprite.Body.Friction = FrictionType.Normal;
  playerSprite.Body.Gravity = GravityType.Normal;

  //step 6 - add collision surface
  playerSprite.collisionPrimitive = new RectCollisionPrimitive(playerSprite.Transform2D, 0);

  //step 7 - add movement controller
  playerSprite.AttachController(
    new PlayerController(
      SpriteData.RUNNER_MOVE_KEYS,
      SpriteData.RUNNER_RUN_VELOCITY,
      SpriteData.RUNNER_JUMP_VELOCITY
    )
  );

  //step 8 - add to the object manager so it is drawn (if we set StatusType.Drawn) and updated (if we set StatusType.Updated)
  objectManager.Add(playerSprite); //add player sprite
}

function LoadPickupSprites() {
  let spriteArtist = new AnimatedSpriteArtist(ctx, SpriteData.COLLECTIBLES_ANIMATION_DATA);
  spriteArtist.SetTake("gold_glint");

  var frameDimensions = spriteArtist.GetSingleFrameDimensions("gold_glint");
  
  //set the origin so that the collision surface is in the center of the sprite
  var origin = Vector2.DivideScalar(frameDimensions, 2);

  let transform = new Transform2D(
    new Vector2(530, 250),
    0,
    Vector2.One,
    origin,
    frameDimensions
  );

  let pickupSprite = new Sprite(
    "gold",
    ActorType.Pickup,
    StatusType.Updated | StatusType.Drawn,
    transform,
    spriteArtist,
    1
  );

  // add the collision surface to test for collisions against
  pickupSprite.collisionPrimitive = new CircleCollisionPrimitive(pickupSprite.Transform2D, 15);

  objectManager.Add(pickupSprite);
}



function LoadEnemySprites() {
  //to do...
}

//#region DEMO - REMOVE LATER
/***************************************DEMO FUNCTIONS ***************************************/

//#endregion
