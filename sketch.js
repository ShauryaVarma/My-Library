var fixedRect, movingRect;
var rect1, rect2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
  rect1 = createSprite (600, 200, 40, 40);
  rect2 = createSprite (600, 250, 40, 40);
  rect1.shapeColor = "blue";
  rect2.shapeColor = "blue";
}

function draw() {
  background(0,0,0);  

  bounce(movingRect, fixedRect);

  drawSprites();

  rect1.y = mouseY;
  rect1.x = mouseX;

  if (touching(rect1, rect2) === true) {
    rect1.shapeColor = "white";
    rect2.shapeColor =  "red";
  }
  else {
    rect1.shapeColor = "green";
    rect2.shapeColor = "green";
  }
  
}

