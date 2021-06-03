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
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// console.log(footballPoints(0, 0));

// Desafio 6

/*
  SOLUCAO 01 (Ana Kyotoku):
  const highestNumber = array.reduce(
    (highest, number) => (highest > number ? highest : number),
  );

  const counter = array.reduce(
    (acc, number) => (number === highestNumber ? acc + 1 : acc),
    0,
  );

  return counter;
*/

/* SOLUCAO 02 (Ory e Bom Dia Vitor): */
// Para boas praticas podemos chamar a function mimosa de getHighestNumber
function mimosa(array) {
  let highestNumber = array[0];

  for (let index = 0; index < array.length; index += 1) {
    if (array[index] > highestNumber) {
      highestNumber = array[index];
    }
  }

  return highestNumber;
}

function highestCount(array) {
  let repeatValue = 0;

  for (let countIndex = 0; countIndex < array.length; countIndex += 1) {
    if (mimosa(array) === array[countIndex]) {
      repeatValue += 1;
    }
  }

  return repeatValue;
}

// console.log(highestCount([0, 0, 0]));

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
