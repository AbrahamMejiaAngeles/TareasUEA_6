let capturador;
let posX, posY;

function setup() {
  createCanvas(windowWidth, windowHeight);
  capturador = createCapture(VIDEO,{flipped: true});
  capturador.size(800,400);
  capturador.hide();


  imageMode(CENTER)
  
  posY = height*0.5;
  posX = width*0.5;
  
}

function draw() {
  background(220);
  image(capturador, posX, posY, 400, 600)
}