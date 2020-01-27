//declare variables
let r;
let factor = 0;
const Y_AXIS = 1;
const X_AXIS = 5;
const LineWeight = 2;
let purple, cblue, black;

//set the display and the few constants
function setup() {
  createCanvas(600, 600);
  r = height / 2 - 16;
  
  //set the rgb values for the gradient
  purple = color(153, 0, 255);
  cblue = color(0, 255, 255);
  
  //set colour for background
  black = color(0,0,0);
}

//get the line vector
function getVector(index, total) {
  const angle = map(index % total, 0, total, 0, TWO_PI);
  const v = p5.Vector.fromAngle(angle + PI);
  v.mult(r);
  return v;
}

//display the cardioid to the screen
function draw() {
  background(black);
  //how many lines will be outputed
  const total = 20;
  //the speed of the lines
  factor += 0.010;
  
  //move the point around the ellipse
  translate(width / 2, height / 2);
  noFill();
  //draw the ellipse
  ellipse(0, 0, r * 2);
  
  //declare the gradientLine object
  let gradientLine = new GradientLine(LineWeight, purple, cblue);

  //loop through to draw the lines
  for (let i = 0; i < total; i++) {
    const a = getVector(i, total);
    const b = getVector(i * factor, total);
    gradientLine.draw(a, b);

  }
}

//the object
class GradientLine {
  constructor(weight, color1, color2) {
    this.color1 = color1;
    this.color2 = color2;
    strokeWeight(weight);
  }
  //function to draw the line
  draw(a, b) {
    if (abs(b.x - a.x) > abs(b.y - a.y)) {
      this.setGradient(a.x, a.y, b.x, b.y, this.color1, this.color2, X_AXIS);
    } else {

      this.setGradient(a.x, a.y, b.x, b.y, this.color2, this.color1, Y_AXIS);
    }

  }
  //creates the gradient based on the coordinates
  setGradient(x1, y1, x2, y2, color1, color2, axis) {
    noFill();
    let inter;
    if (axis === Y_AXIS) {
      // Top to bottom gradient
      if (y1 > y2) {
        inter = map(random(y1,y2), y2, y2 + abs(x1 - x2), 0, 1);
      } else {
        inter = map(random(y1,y2), y1, y1 + abs(x1 - x2), 0, 1);
      }

      
    } else if (axis === X_AXIS) {
      // Left to right gradient
      if (x1 > x2) {
        inter = map(random(x1,x2), x2, x1 + abs(y1 - y2), 0, 1);
      } else {
        inter = map(random(x1,x2), x1, x2 + abs(y1 - y2), 0, 1);
      }

    }      
    let c = lerpColor(color1, color2, inter);
    stroke(c);
    line(x1, y1, x2, y2);
  }
}
