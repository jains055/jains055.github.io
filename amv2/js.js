var newColor = "#" + Math.floor(Math.random()*16777215).toString(16);
 // $("#myCanvas").css("background-color",newColor);

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

var lastclickx = false;
var lastclicky = false;

$(window).click(function(event) {
    console.log(event.clientX);
     console.log(event.clientY);
    var x = event.clientX;
    var y = event.clientY;
if (lastclickx == false) {
  lastclickx = x;
  lastclicky = y;
}

ctx.beginPath();
ctx.moveTo(lastclickx,lastclicky);
ctx.lineTo(x,y);
ctx.strokeStyle=newColor;
ctx.stroke();
ctx.closePath();
  lastclickx = x;
  lastclicky = y;

ctx.fill();
ctx.fillStyle = "white";
});