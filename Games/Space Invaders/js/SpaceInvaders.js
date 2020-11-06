window.addEventListener("load", LoadGame);
//get a handle to the canvas
var cvs = document.getElementById("main_canvas");

//get a handle to the 2D context of the canvas
var ctx = cvs.getContext("2d");

//game variables
var gameTime = null;
var clearColor = "rgb(15, 0, 0)";
var objectManager = null;



var backgroundSprite = null;
var enemyThreeSprite = null;
var cloneEnemySprite = null;

//temp
var sx = 0, sy = 0;
var sWidth = 22;
var sHeight = 17;
var timeSinceLastFrameChangeInMs = 0;
var bActiveFrameOne = true;


function LoadGame() {

    //#region Demo Array
    sprites = new Array();

    sprites[ActorType.Background] = new Array();
    sprites[ActorType.Background].push("clouds");
    sprites[ActorType.Background].push("mountain");
    sprites[ActorType.Background].push("trees");
    //#endregion

    //set all variables, objects, resources before start
    Initialize();

    //add game primitive
    Start();

    //start update/draw cycle
    window.requestAnimationFrame(animate);
}

function Initialize(){

    //instanticate GameTime
    gameTime = new GameTime();

    //images and sound
    LoadAssets();

    //load object manager, camera manager, sound manager, collision manager
    LoadManagers();

    //initialize all the drawn sprites of all types (background, PC, nonPC, pickups)
    InitializeSprites();
}

function LoadManagers(){
    this.objectManager = new ObjectManager(this.ctx);
}

function InitializeSprites(){

    var transform2D = null;
    var artist = null;

    //#region background
    transform2D = new Transform2D(Vector2.Zero, 0, Vector2.One,  Vector2.Zero,
                            new Vector2(cvs.clientWidth, cvs.clientHeight));

    artist = new SpriteArtist(ctx, backgroundSpriteSheet, new Vector2(0,0),
    new Vector2(backgroundSpriteSheet.width, backgroundSpriteSheet.height), 1);

    backgroundSprite = new Sprite("background", 
            ActorType.Background, StatusType.Drawn, transform2D, artist);

    //add to the object manager
    this.objectManager.Add(backgroundSprite);

    //#endregion

    //#region enemy 
    transform2D = new Transform2D(new Vector2(200, 320), 0, Vector2.One, 
                                Vector2.Zero, new Vector2(48, 64));
                                                                                                     
    artist = new SpriteArtist(ctx, spriteSheet, new Vector2(39,0),
                                                            new Vector2(22, 15), 1);
    enemyThreeSprite = new Sprite("enemy 3", 
                ActorType.NPC, StatusType.Updated | StatusType.Drawn,
                    transform2D, artist); 
                    
    //add to the object manager
    this.objectManager.Add(enemyThreeSprite);

    //#endregion

    //#region Cloned enemies
    cloneEnemySprite = enemyThreeSprite.Clone();
    cloneEnemySprite.transform2D.TranslateBy(new Vector2(100, 0));

    //add to the object manager
    this.objectManager.Add(cloneEnemySprite);
    //#endregion

}

function Start() {
    //hide the menu
    //play sounds
}

function LoadAssets(){
    this.backgroundSpriteSheet = document.getElementById("invaders_background");
    this.spriteSheet = document.getElementById("invaders_sprite_sheet");
}

function animate(now) {
    gameTime.Update(now);
    update(gameTime);
    draw(gameTime);
    window.requestAnimationFrame(animate);
}

function update(gameTime) {
   this.objectManager.Update(gameTime);
}

function draw(gameTime) {
    clearCanvas(clearColor);

    this.objectManager.Draw(gameTime);
}

function clearCanvas(color) {
    ctx.save();
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, cvs.clientWidth, cvs.clientHeight);
    ctx.restore();
}
