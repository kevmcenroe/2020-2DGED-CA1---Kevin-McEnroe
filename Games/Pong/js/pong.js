window.addEventListener("load", loadGame);

var keysDown = {}; //new Array();

window.addEventListener("keydown", function(evt){
  //  console.log(evt.key);
    keysDown[evt.key] = true;
});

window.addEventListener("keyup", function(evt){
   // console.log(evt.key);
    delete keysDown[evt.key];
});

//get a handle to the canvas
var cvs = document.getElementById("main_canvas");

//get a handle to the 2D context of the canvas
var ctx = cvs.getContext("2d");

//game variables
var pongBall, pongPaddleL, pongPaddleR;
var ballSpeed = 5;
var hitColorA = "yellow", hitColorB = "green";
var hitColor = hitColorA;
var paddleMoveSpeed = 15;

let height = 80;
let width = 10;
let margin = 5;

function demos(){
    /** DEMO **/
    try{
        var x = GDUtilities.getRandomInRangeExcl(1, 10, [2, 3, 4]);
    }
    catch(err){
        console.log(err);
    }
}

function loadGame(){

    //demos();

    //add game primitive
    initializeGame();

    //start update/draw cycle
    window.requestAnimationFrame(animate);
}

function initializeControls(){
    pongPaddleL = new Rect(new Vector2(margin, (cvs.clientHeight - height)/2), 
    new Vector2(width, height));

    pongPaddleR = new Rect(new Vector2(cvs.clientWidth - margin - width, 
            (cvs.clientHeight - height)/2), 
    new Vector2(width, height));
}
function initializeBall(){
    pongBall = new Arc(320, 240, 20, 0, Math.PI * 2);
    ballVector = new Vector2(Math.floor(Math.random() * 10 - 5), Math.floor(Math.random() * 10 - 5));
    ballVector.normalize();
}

function initializeGame(){
    initializeControls();
    initializeBall();
}

function animate(){
    update();
    draw();  
    window.requestAnimationFrame(animate);
}

function update(){
    
  //  console.log('keysDown :>> ', keysDown);

    checkCollisions();
    updateBall();
    updatePaddles();
    updateScore();
}

function checkCollisions(){

    //ball
    if(this.pongBall.x >= cvs.clientWidth - 20){
        this.ballVector.x *= -1;
        hitColor = hitColorA;
    }
    else if(this.pongBall.x <= 20){
        this.ballVector.x *= -1;
        hitColor = hitColorB;
    }

    if(this.pongBall.y >= cvs.clientHeight - 20)
        this.ballVector.y *= -1;
    else if(this.pongBall.y <= 20)
        this.ballVector.y *= -1;

    //paddle collision with world 

    //paddle collision with ball
}

function updateBall(){
    this.pongBall.x += ballSpeed * ballVector.x;
    this.pongBall.y += ballSpeed * ballVector.y;
}

function updatePaddles(){
    for(var key in this.keysDown){
        if(key == "w"){
            this.pongPaddleL.move(0, -paddleMoveSpeed);
        }
        else if(key == "s"){
            this.pongPaddleL.move(0, paddleMoveSpeed);
        }

        //right paddle
    }
}

function updateScore(){

}



function draw(){
    clearCanvas("rgb(255, 255, 241)");

    pongBall.draw(ctx, 2, "red", hitColor, false);
    pongPaddleL.draw(ctx, 2, "blue");
    pongPaddleR.draw(ctx, 2, "orange");
}

function clearCanvas(color){
    ctx.save();
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, cvs.clientWidth, cvs.clientHeight);
    ctx.restore();
}
