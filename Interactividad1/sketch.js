function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  textSize(50)
  text ()
}
// Emociones asociadas a las teclas QWERTYUIOP
// Cada emoción tiene su propio color, tamaño y palabra

let emociones = {
  'Q': {
    palabra: 'Curiosidad',
    colorCirculo: '#b85c11', 
    tamanoCirculo: 180,
    colorTexto: '#000000',   
    tamanoTexto: 28
  },
  'W': {
    palabra: 'Miedo',
    colorCirculo: '#808080', // Gris
    tamanoCirculo: 200,
    colorTexto: '#FFFFFF',   // Blanco
    tamanoTexto: 32
  },
  'E': {
    palabra: 'Alegría',
    colorCirculo: '#FFA500', // Naranja
    tamanoCirculo: 220,
    colorTexto: '#FFFFFF',
    tamanoTexto: 30
  },
  
  'R': {
    palabra: 'Rabia',
    colorCirculo: '#8B0000', // Rojo oscuro
    tamanoCirculo: 190,
    colorTexto: '#FFFF00',   // Amarillo
    tamanoTexto: 28
  },
  'T': {
    palabra: 'Tristeza',
    colorCirculo: '#0000FF', // Azul
    tamanoCirculo: 210,
    colorTexto: '#FFFFFF',
    tamanoTexto: 30
  },
  'Y': {
    palabra: 'Asombro',
    colorCirculo: '#800080', // Morado
    tamanoCirculo: 200,
    colorTexto: '#FFFFFF',
    tamanoTexto: 30
  },
    'U': {
    palabra: 'Unidad',
    colorCirculo: '#90EE90', // Verde claro
    tamanoCirculo: 190,
    colorTexto: '#000000',
    tamanoTexto: 26
  },
  'I': {
    palabra: 'Inseguridad',
    colorCirculo: '#4682B4', // Azul acero
    tamanoCirculo: 200,
    colorTexto: '#FFFFFF',
    tamanoTexto: 28
  },
  'O': {
    palabra: 'Orgullo',
    colorCirculo: '#FFD700', // Dorado
    tamanoCirculo: 210,
    colorTexto: '#000000',
    tamanoTexto: 32
  },
  'P': {
    palabra: 'Paz',
    colorCirculo: '#008080', // Verde azulado
    tamanoCirculo: 190,
    colorTexto: '#FFFFFF',
    tamanoTexto: 28
  }


 
};

// Esta variable guarda la letra actual que se ha presionado
let letraPresionada = '';

function setup() {
  createCanvas(windowWidth, windowHeight); 
  textAlign(CENTER, CENTER);            
}

function draw() {
  background(0); 

  // Si hay una letra presionada válida
  if (letraPresionada in emociones) {
    let emocion = emociones[letraPresionada]; // Obtener datos de la emoción

    // Dibujar el círculo
    fill(emocion.colorCirculo);
    noStroke();
    ellipse(width / 2, height / 2, emocion.tamanoCirculo);

    // Mostrar la palabra
    fill(emocion.colorTexto);
    textSize(emocion.tamanoTexto);
    text(emocion.palabra, width / 2, height / 2);
  }
}

// Esta función detecta qué tecla se presiona
function keyPressed() {
  let tecla = key.toUpperCase();

  if (tecla in emociones) {
    letraPresionada = tecla;
  }
}