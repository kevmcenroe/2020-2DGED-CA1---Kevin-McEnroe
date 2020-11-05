window.addEventListener("load", LoadGame);
//get a handle to the canvas
var cvs = document.getElementById("main_canvas");

//get a handle to the 2D context of the canvas
var ctx = cvs.getContext("2d");

//game variables
var gameTime = null;
var clearColor = "rgb(15, 0, 0)";
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

    //initialize all the drawn sprites of all types (background, PC, nonPC, pickups)
    InitializeSprites();
}

function InitializeSprites(){

    var transform2D = null;
    var artist = null;

    //#region background
    transform2D = new Transform2D(Vector2.Zero, 0, Vector2.One,  Vector2.Zero,
                            new Vector2(cvs.clientWidth, cvs.clientHeight));
    artist = new SpriteArtist(ctx, backgroundSpriteSheet, new Vector2(0,0),
                            new Vector2(backgroundSpriteSheet.width, backgroundSpriteSheet.height), 1);
    backgroundSprite = new Sprite("background", transform2D, artist);
    //#endregion

    //#region enemy 
    transform2D = new Transform2D(new Vector2(200, 320), 0, Vector2.One, 
                                Vector2.Zero, new Vector2(48, 64));
                                                                                                     
    artist = new SpriteArtist(ctx, spriteSheet, new Vector2(39,0),
                                                            new Vector2(22, 15), 1);
    enemyThreeSprite = new Sprite("enemy 3", transform2D, artist);       
    //#endregion

    //#region Cloned enemies
    cloneEnemySprite = enemyThreeSprite.Clone();
    cloneEnemySprite.transform2D.TranslateBy(new Vector2(100, 0));
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
    console.log(gameTime.TotalElapsedTimeInMs);
}

function draw(gameTime) {
    clearCanvas(clearColor);

    backgroundSprite.Draw(gameTime);
    enemyThreeSprite.Draw(gameTime);
    cloneEnemySprite.Draw(gameTime);
    /*
    //background
    ctx.drawImage(this.backgroundSpriteSheet, 0, 0, 480, 640);

    if(bActiveFrameOne){
        sy=0;
    }
    else{
        sy=18;
    }
    ctx.drawImage(this.spriteSheet, sx, sy, sWidth, sHeight, 0, 0, 50, 50);

    timeSinceLastFrameChangeInMs += gameTime.ElapsedTimeInMs;
    if(timeSinceLastFrameChangeInMs > 1000){
        bActiveFrameOne = !bActiveFrameOne;
        timeSinceLastFrameChangeInMs = 0;
    }
    */
    
}

function clearCanvas(color) {
    ctx.save();
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, cvs.clientWidth, cvs.clientHeight);
    ctx.restore();
}
