var cupColor;
var currentColor;
var canvas;
var easing = 0.5;
var targetX;
var x = 0;

function setup() {
  canvas = createCanvas(windowWidth, 90);
  canvas.parent('sketch-holder');
  // canvas.style('z-index', '-1');
  cupColor = color('white');
  currentColor = 'white';
  canvas.position(0,0);
}

function draw() {
  background(color(238, 138, 71));

  targetX = mouseX;
  x += (targetX - x) * easing;
  
  strokeWeight(5);
  // fill(color(238, 138, 71)); // cup handle fill
  // circle(60, 50, 25); // cup handle
  
  fill(cupColor);
  rect(x, 22.5, 50, 50, 5);
  rect(x, 22.5, 50, 5, 5);
  // ellipse((x+50)*0.25, 50, 12.5, 0.25);
  // ellipse((x+16.25)*0.25, 50, 12.5, 0.25);
  
}

function mousePressed () {
  if (currentColor == 'white') {
    print("white resetting to brown");
    cupColor = color(238, 138, 71);
    currentColor = 'brown';
  } else {
    print("brown resetting to white");
    cupColor = color('white');
    currentColor = 'white';
  }
}
