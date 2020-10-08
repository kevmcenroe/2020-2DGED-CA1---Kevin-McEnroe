
//get a handle to the canvas
var cvs = document.getElementById("main_canvas");

//get a handle to the 2D context of the canvas
var cxt = cvs.getContext("2d");

//draw 1 or more primitive types (e.g. line, arc, rect)
cxt.beginPath();
cxt.moveTo(50, 100);
cxt.lineTo(250, 100);
cxt.lineWidth = 2;
cxt.strokeStyle = "#00ff00";
cxt.stroke();
cxt.closePath();

cxt.beginPath();
cxt.moveTo(150, 100);
cxt.lineTo(150, 200);
cxt.lineWidth = 4;
cxt.strokeStyle = "#ff0000";
cxt.stroke();
cxt.closePath();

cxt.beginPath();
cxt.arc(320, 240, 30, 0, Math.PI, false);
cxt.lineWidth = 5;
cxt.fillStyle = "#ffff00";
cxt.strokeStyle = "#0000ff"; //"blue"
cxt.stroke();
cxt.fill();
cxt.closePath();
