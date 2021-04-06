// Desafio 1
function compareTrue(param1, param2) {
  return param1 && param2 === true;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(array) {
  return `${array[array.length - 1]}, ${array[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(array) {
  let cont = 0;
  let maior = array[0];
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] > maior) {
      maior = array[i];
    }
  }
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] === maior) {
      cont += 1;
    }
  }
  return cont;
}

// Desafio 7
function catAndMouse(cat1, cat2) {
  if (cat1 < cat2) {
    return 'cat1';
  } else if (cat1 > cat2) {
    return 'cat2';
  } else if (cat1 === cat2) {
    return 'os gatos trombam e o rato foge';
  }
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
