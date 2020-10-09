
//get a handle to the canvas
var cvs = document.getElementById("main_canvas");

//get a handle to the 2D context of the canvas
var ctx = cvs.getContext("2d");

ctx.beginPath();
//face
ctx.arc(320, 240, 80, 0, Math.PI * 2);
//left eye
ctx.arc(280, 200, 10, 0, Math.PI * 2);
//right eye
ctx.arc(360, 200, 10, 0, Math.PI * 2);
//smile
ctx.arc(320, 240, 60, 0, Math.PI);
ctx.stroke();
ctx.closePath();














/*
ctx.beginPath();
ctx.moveTo(50, 100);
ctx.lineTo(250, 100);
ctx.lineWidth = 2;
ctx.strokeStyle = "#00ff00";
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.moveTo(150, 100);
ctx.lineTo(150, 200);
ctx.lineWidth = 4;
ctx.strokeStyle = "#ff0000";
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.arc(320, 240, 30, -Math.PI/2, -Math.PI, true);
ctx.lineWidth = 5;
ctx.fillStyle = "#ffff00";
ctx.strokeStyle = "#0000ff"; //"blue"
ctx.stroke();
ctx.fill();
ctx.closePath();
*/






