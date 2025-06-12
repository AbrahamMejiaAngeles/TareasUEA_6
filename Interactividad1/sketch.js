function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER, CENTER);
}

// Variables para cada emoción
let palabra1 = "";
let palabra2 = "";
let palabra3 = "";
let palabra4 = "";
let palabra5 = "";
let palabra6 = "";
let palabra7 = "";
let palabra8 = "";
let palabra9 = "";
let palabra10 = "";

// Fondos de círculo
let circulo1 = false;
let circulo2 = false;
let circulo3 = false;
let circulo4 = false;
let circulo5 = false;
let circulo6 = false;
let circulo7 = false;
let circulo8 = false;
let circulo9 = false;
let circulo10 = false;

function draw() {
  background(0);

  // 1
  if (circulo1) {
    fill('#b85c11');
    noStroke();
    ellipse(width / 2, height / 2, 120);
    fill('#000000');
    textSize(28);
    text(palabra1, width / 2, height / 2);
  }

  // 2
  if (circulo2) {
    fill('#808080');
    noStroke();
    ellipse(width / 2, height / 2, 120);
    fill('#FFFFFF');
    textSize(32);
    text(palabra2, width / 2, height / 2);
  }

  // 3
  if (circulo3) {
    fill('#FFA500');
    noStroke();
    ellipse(width / 2, height / 2, 140);
    fill('#FFFFFF');
    textSize(30);
    text(palabra3, width / 2, height / 2);
  }

  // 4
  if (circulo4) {
    fill('#8B0000');
    noStroke();
    ellipse(width / 2, height / 2, 160);
    fill('#FFFF00');
    textSize(28);
    text(palabra4, width / 2, height / 2);
  }

  // 5
  if (circulo5) {
    fill('#0000FF');
    noStroke();
    ellipse(width / 2, height / 2, 180);
    fill('#FFFFFF');
    textSize(30);
    text(palabra5, width / 2, height / 2);
  }

  // 6
  if (circulo6) {
    fill('#800080');
    noStroke();
    ellipse(width / 2, height / 2, 200);
    fill('#FFFFFF');
    textSize(30);
    text(palabra6, width / 2, height / 2);
  }

  // 7
  if (circulo7) {
    fill('#90EE90');
    noStroke();
    ellipse(width / 2, height / 2, 220);
    fill('#000000');
    textSize(26);
    text(palabra7, width / 2, height / 2);
  }

  // 8
  if (circulo8) {
    fill('#4682B4');
    noStroke();
    ellipse(width / 2, height / 2, 240);
    fill('#FFFFFF');
    textSize(28);
    text(palabra8, width / 2, height / 2);
  }

  // 9
  if (circulo9) {
    fill('#FFD700');
    noStroke();
    ellipse(width / 2, height / 2, 260);
    fill('#000000');
    textSize(32);
    text(palabra9, width / 2, height / 2);
  }

  // 10
  if (circulo10) {
    fill('#008080');
    noStroke();
    ellipse(width / 2, height / 2, 280);
    fill('#FFFFFF');
    textSize(28);
    text(palabra10, width / 2, height / 2);
  }
}

function keyPressed() {
  let tecla = key.toUpperCase();

  if (tecla === 'Q') {
    palabra1 = "Unidad";
    circulo1 = true;
  }
  if (tecla === 'W') {
    palabra2 = "Miedo";
    circulo2 = true;
  }
  if (tecla === 'E') {
    palabra3 = "Alegría";
    circulo3 = true;
  }
  if (tecla === 'R') {
    palabra4 = "Rabia";
    circulo4 = true;
  }
  if (tecla === 'T') {
    palabra5 = "Tristeza";
    circulo5 = true;
  }
  if (tecla === 'Y') {
    palabra6 = "Asombro";
    circulo6 = true;
  }
  if (tecla === 'U') {
    palabra7 = "Curiosidad";
    circulo7 = true;
  }
  if (tecla === 'I') {
    palabra8 = "Inseguridad";
    circulo8 = true;
  }
  if (tecla === 'O') {
    palabra9 = "Orgullo";
    circulo9 = true;
  }
  if (tecla === 'P') {
    palabra10 = "Paz";
    circulo10 = true;
  }

 
  if (tecla === 'A') {
    palabra1 = "";
    circulo1 = false;
    palabra2 = "";
    circulo2 = false;
    palabra3 = "";
    circulo3 = false;
    palabra4 = "";
    circulo4 = false;
    palabra5 = "";
    circulo5 = false;
    palabra6 = "";
    circulo6 = false;
    palabra7 = "";
    circulo7 = false;
    palabra8 = "";
    circulo8 = false;
    palabra9 = "";
    circulo9 = false;
    palabra10 = "";
    circulo10 = false;
  }
}