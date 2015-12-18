function mouseClicked() {
  if (value == 0) {
    value = 255;
  } else {
    value = 0;
  }
}


function setup() {
  createCanvas(100, 50);
  background(153);
  line(0, 0, width, height);
}