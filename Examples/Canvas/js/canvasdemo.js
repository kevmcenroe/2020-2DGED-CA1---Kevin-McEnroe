
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