// Desafio 1
function compareTrue(value1, value2) {
  if(value1 && value2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
 return base * height / 2;
};


// Desafio 3
function splitSentence(string) {
  return string.split(' ')
};

// Desafio 4
function concatName(strings) {
  let strings = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']
  return strings[0] + ', ' + strings[3];
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
