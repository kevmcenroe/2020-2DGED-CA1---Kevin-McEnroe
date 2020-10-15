//setTimeout
//setInterval
//requestAnimationFrame

/*
setTimeout(callbackFunction, timeInMs)
     - clearTimeout(handleTimer)
*/
/*
function demoSetimeout()
{
    var timerHandle;
    var timeInMs = 6000;

    function startTimer(){
        timerHandle = setTimeout(doSomething, timeInMs);
        console.log("timer has started!");
    }
    function doSomething(){
        console.log("timer has elapsed!");
    }
    function stopTimer(){
        clearTimeout(timerHandle);
        console.log("timer has been stopped!");
    }

    window.addEventListener("load", startTimer);
    window.addEventListener("click", stopTimer);
}

function demoSetInterval()
{
    var timerHandle;
    var timeInMs = 1000;

    function startTimer(){
        timerHandle = setInterval(doSomething, timeInMs);
        console.log("timer has started!");
    }
    function doSomething(){
        console.log("timer has elapsed!");
    }
    function stopTimer(){
        clearInterval(timerHandle);
        console.log("timer has been stopped!");
    }

    window.addEventListener("load", startTimer);
    window.addEventListener("click", stopTimer);
}
*/

function loadGame(){
    window.requestAnimationFrame(animate);
    console.log("timer has started!");
}
function animate(){
    console.log("animating...");
    update();
    draw();  
    window.requestAnimationFrame(doSomething);
}

function update(){
}
function draw(){
}

window.addEventListener("load", loadGame);