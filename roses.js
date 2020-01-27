var k = 4;

var d = 7;
var n = 8;
var c;

var sliderN;
var sliderD;
var sliderC;

const Y_AXIS = 1;
const X_AXIS = 2;
let b1, b2;

function setup() {
  createCanvas(500, 500);
  sliderN = createSlider(1, 20, 10, 1);
  sliderD = createSlider(1, 20, 10, 1);
  sliderC = createSlider(0, 360, 0, 40);
  sliderN.input(draw);
  sliderD.input(draw);
  sliderC.input(draw);
  
  b1 = color(10, 97, 107);
  b2 = color(139, 173, 214);
}

function draw() {
  n = sliderN.value();
  d = sliderD.value();
  c = sliderC.value();
  var k = n / d;
  
  setGradient(0, 0, width / 2, height, b1, b2, X_AXIS);
  setGradient(width / 2, 0, width / 2, height, b2, b1, X_AXIS);
  //background(10, 97, 107);
  translate(width / 2, height / 2);
  
  beginShape();
  push();
  noFill();
  stroke(c);


  for (var a = 0; a < TWO_PI * d; a += 0.02) {
    var r = 200 * cos(k * a) + 20;
    var x = r * cos(a);
    var y = r * sin(a);

    vertex(x, y);
  }

  endShape(CLOSE);
}

function setGradient(x, y, w, h, c1, c2, axis) {
  noFill();
 
  if (axis === X_AXIS) {
    // Left to right gradient
    for (let i = x; i <= x + w; i++) {
      let inter = map(i, x, x + w, 0, 1);
      let c = lerpColor(c1, c2, inter);
      stroke(c);
      line(i, y, i, y + h);
    }
  }
}
