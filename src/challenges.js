// Desafio 1
function compareTrue(param1, param2) {
  return param1 && param2;
}

// console.log(compareTrue(false, false));

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// console.log(calcArea(2, 5));

// Desafio 3
function splitSentence(phrase) {
  return phrase.split(' ');
}

// console.log(splitSentence('go Trybe'));

// Desafio 4
function concatName(array) {
  let firstName = array[0];
  let lastName = array[array.length - 1];
  let fullName = `${lastName}, ${firstName}`;

  return fullName;

  // return `${array[array.length - 1]}, ${array[0]}`;
}

// console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

// Desafio 5
function footballPoints() {
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
