SquareDog();
function SquareDog() {
  createCanvas("id", 320, 450);
  rect(80, 120, 160, 190);
  circle(180, 190, 7);
  circle(140, 190, 7);
  rect(120, 200, 80, 70);
  penUp();
  moveTo(144, 245);
  turnLeft(225);
  penDown();
  arcLeft(90, 25);
  turnLeft(135);
  moveForward(35);
  penUp();
  moveTo(106, 310);
  turnLeft(90);
  penDown();
  moveForward(120);
  turnLeft(90);
  moveForward(50);
  turnLeft(90);
  moveForward(40);
  turnRight(90);
  moveForward(10);
  turnRight(90);
  moveForward(40);
  turnLeft(90);
  moveForward(50);
  turnLeft(90);
  moveForward(120);
  turnRight(90);
}
Table();
function Table() {
  penUp();
  moveForward(25);
  penDown();
  penColor("GREEN");
  arcRight(90, 25);
  penColor("yellow");
  moveForward(95);
  turnRight(90);
  penColor("GREEN");
  moveForward(50);
  penUp();
  moveForward(110);
  penDown();
  moveForward(50);
  turnRight(90);
  penColor("GREEN");
  moveForward(95);
  arcRight(90, 25);
}
People();
function People() {
  penUp();
  moveTo(0, 0);
}
