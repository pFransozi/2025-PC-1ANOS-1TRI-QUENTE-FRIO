let x;
let y;

function setup() {
  createCanvas(400, 400);
  x = random(400);
  x = int(x);
  y = random(400);
  y = int(y);
}

function draw() {
  background(220);
  circle(x, y, 10);
  console.log(mouseX,x);

  if (mouseX == x ) {
    text("Encontrei!", 200, 200);
    noLoop();
  }
}
