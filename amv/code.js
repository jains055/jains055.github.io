var shapes = ["square", "recatnngle", "circle", "moon", "cone", "trangle-up", "trangle-down"];

$(".container").addClass(shapes[Math.floor(Math.random()*shapes.length)]);
var newColor = "#" + Math.floor(Math.random()*16777215).toString(16);
  $(".container").css("background-color",newColor);



