// Desafio 1

function compareTrue(valueA, valueB) {
  return (valueA && valueB);
}
// Oliva fez a demonstração em aula desse desafio

// Desafio 2

function calcArea(base, height) {
  return ((base * height) / 2);
}

// Desafio 3
function splitSentence(sentence) {
  return sentence.split(' ');
}
/** source https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/split */

// Desafio 4
function concatName() {
  // seu código aqui
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties;
}

// Desafio 6
function getHighestNumber(numberArray) {
  let highestNumber = numberArray[0];
  for (let number of numberArray) {
    if (number > highestNumber) highestNumber = number;
  }
  return highestNumber;
}
function highestCount(numberArray) {
  let highest = getHighestNumber(numberArray);
  let count = 0;
  for (let number of numberArray) {
    if (number === highest) count += 1;
  }
  return count;
}

// Desafio 7
function catAndMouse(cat1, cat2, mouse) {
  let cat1distance = cat1 - mouse;
  let cat2distance = cat2 - mouse;
  if (cat1distance < cat2distance) {
    return 'cat1';
  }
  if (cat2distance < cat1distance) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
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
