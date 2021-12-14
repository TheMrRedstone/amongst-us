const canvas = document.getElementById("gameArea");
const ctx = canvas.getContext("2d");

let x = 350;
let y = 300;
let radius = 20;
let speed = 2.5;

let upPressed = false;
let downPressed = false;
let leftPressed = false;
let rightPressed = false;

var color = "red"
var Hat = "none"
var FaceHat = "none"
var hatdiv = document.createElement("div");

function drawGame() {
  requestAnimationFrame(drawGame);
  clearScreen();
  inputs();
  boundryCheck();
  drawGreenBlob();
}

function boundryCheck() {
  //up
  if (y < radius) {
    y = radius;
  }
  //down
  if (y > canvas.height - radius) {
    y = canvas.height - radius;
  }
  //left
  if (x < radius) {
    x = radius;
  }
  //right
  if (x > canvas.width - radius) {
    x = canvas.width - radius;
  }
}

function inputs() {
  if (upPressed) {
    y = y - speed;
  }
  if (downPressed) {
    y = y + speed;
  }
  if (leftPressed) {
    x = x - speed;
  }
  if (rightPressed) {
    x = x + speed;
  }
}

function drawGreenBlob() {
  ctx.fillStyle = color;
  var img = document.getElementById("img");
  ctx.drawImage(img, 0, 0, 680, 580);
  if (upPressed) {
    ctx.fillStyle = color;
    
  }
  if (downPressed) {
    ctx.fillStyle = color;
  }
  if (leftPressed) {
    ctx.fillStyle = color;
  }
  if (rightPressed) {
    ctx.fillStyle = color;
  }

  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.fill();
}

function clearScreen() {
  ctx.fillStyle = "lightgrey";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

document.body.addEventListener("keydown", keyDown);
document.body.addEventListener("keyup", keyUp);

function keyDown(event) {
  //up
  if (event.keyCode == 38) {
    upPressed = true;
  }

  //down
  if (event.keyCode == 40) {
    downPressed = true;
  }
  //left
  if (event.keyCode == 37) {
    leftPressed = true;
  }

  //right
  if (event.keyCode == 39) {
    rightPressed = true;
  }
}

function keyUp(event) {
  //up
  if (event.keyCode == 38) {
    upPressed = false;
  }

  //down
  if (event.keyCode == 40) {
    downPressed = false;
  }
  //left
  if (event.keyCode == 37) {
    leftPressed = false;
  }

  //right
  if (event.keyCode == 39) {
    rightPressed = false;
  }
}

drawGame();
