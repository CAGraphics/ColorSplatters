let splatters = [];
let deltaHue;
let hue;

function setup() {
  createCanvas(960, 690);

  deltaHue = PI / 12;
  hue = 0;

  colorMode(HSB, 360, 255, 255);
}

function draw() {
  background(0);
  translate(width / 2, height / 2);

  if (splatters) {
    for (var splatter of splatters) {
      splatter.animate();
      splatter.render();
    }
  }

  hue += deltaHue;
}

function mousePressed() {
  var center = createVector(width / 2, height / 2);
  var mouse = createVector(mouseX, mouseY);
  var position = p5.Vector.sub(mouse, center);
  var sHue = hue % 360;

  splatters.push(new Splatter(position, sHue));
}
