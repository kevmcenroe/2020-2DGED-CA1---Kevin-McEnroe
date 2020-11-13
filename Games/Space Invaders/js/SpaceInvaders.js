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
//add more here...

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
  this.objectManager.Update(gameTime);

  //we will add and update more managers here...
}

function Draw(gameTime) {
  //clear previous draw
  ClearCanvas(Color.White);

  //call object manager to draw all sprites
  this.objectManager.Draw(gameTime);

  //we will add and draw more managers here...
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

//#region Variables

//add your variables here...

//#endregion

//#region Functions

//#region Initialize Game
/**
 * Calls the sequence of functions required to load, intialize, store and show sprites and sounds
 */
function Initialize() {
  //textures and sound
  LoadAssets();

  //load object manager, camera manager, sound manager, collision manager
  LoadManagers();

  // LoadUI();

  //initialize all the Drawn sprites of all types (background, PC, nonPC, pickups)
  LoadSprites();
}
//#endregion

//#region Load Assets
/**
 * Loads all sprite and sound assets used by your game
 */
function LoadAssets() {
  LoadSpriteSheets();
  LoadSounds();
}

/**
 * Initialize a reference to each of the sprite sheets used by the sprites in your game (note: texture files have loaded in HTML file as HTML elements)
 */
function LoadSpriteSheets() {
  this.backgroundSpriteSheet = document.getElementById("invaders_background");
  this.spriteSheet = document.getElementById("invaders_sprite_sheet");
}

/**
 * Initialize a reference to each of the sounds in your game (note: sound files have loaded in HTML file as HTML elements)
 */
function LoadSounds() {
  //to do...
}
//#endregion

//#region Load Managers
/**
 * Initialize all managers (object, keyboard, sound, UI) used in the game
 */
function LoadManagers() {
  this.objectManager = new ObjectManager(this.ctx);
  //sound, UI, state
}
//#endregion

//#region Load Sprites
/**
 * Instanciate the Sprite objects drawn within the game
 */
function LoadSprites() {
 // LoadBackgrounds();
  LoadEnemies();
  LoadPlayers();
  LoadBarriers();

  //LoadPickups();
  //LoadObstacles();
}

/**
 * Instanciate all background Sprite objects
 */
function LoadBackgrounds() {
  var transform2D = null;
  var artist = null;

  transform2D = new Transform2D(
    Vector2.Zero,
    0,
    Vector2.One,
    Vector2.Zero,
    new Vector2(cvs.clientWidth, cvs.clientHeight)
  );

  artist = new SpriteArtist(
    ctx,
    backgroundSpriteSheet,
    new Vector2(0, 0),
    new Vector2(backgroundSpriteSheet.width, backgroundSpriteSheet.height),
    1
  );

  var backgroundSprite = new Sprite(
    "background",
    ActorType.Background,
    StatusType.Drawn, //Updated, Drawn, Off, Updated | Drawn
    transform2D,
    artist
  );

  //add to the object manager
  this.objectManager.Add(backgroundSprite);
}

/**
 * Instanciate all enemy Sprite objects
 */
function LoadEnemies() {
  var transform2D = null;
  var artist = null;

  /**************** Enemy 3 ****************/

//   transform2D = new Transform2D(
//     new Vector2(200, 320),
//     0,
//     Vector2.One,
//     Vector2.Zero,
//     new Vector2(48, 64)
//   );

//   artist = new SpriteArtist(
//     ctx,
//     spriteSheet,
//     new Vector2(39, 0),
//     new Vector2(22, 15),
//     1
//   );
//   var enemyThreeSprite = new Sprite(
//     "enemy 3",
//     ActorType.NPC,
//     StatusType.Updated | StatusType.Drawn,
//     transform2D,
//     artist
//   );

//   //add to the object manager
//   this.objectManager.Add(enemyThreeSprite);

//   //Clone Enemy 3

//   var cloneEnemySprite = enemyThreeSprite.Clone();
//   cloneEnemySprite.transform2D.TranslateBy(new Vector2(100, 0));

//   //add to the object manager
//   this.objectManager.Add(cloneEnemySprite);

  /**************** Animated Enemy 2 ****************/

  //to do...
  transform2D = new Transform2D(
    new Vector2(50, 50),
    0,
    Vector2.One,
    Vector2.Zero,
    new Vector2(75, 75));

  artist = new AnimatedSpriteArtist(
    ctx,
    spriteSheet,
    SpriteData.ENEMY_TWO_FRAMES,
    0, 1, 
    24);

    var animatedEnemyTwoSprite = new Sprite(
        "animated enemy 2",
        ActorType.NPC,
        StatusType.Updated | StatusType.Drawn,
        transform2D,
        artist);

    //add to the object manager
    this.objectManager.Add(animatedEnemyTwoSprite);

    /**************** Animated Enemy 3 ****************/

}

/**
 * Instanciate all player Sprite objects
 */
function LoadPlayers() {
  //to do...
}

/**
 * Instanciate all barrier Sprite objects
 */
function LoadBarriers() {
  //to do...
}

//#endregion

//#endregion
