// Desafio 1
function compareTrue(bool1, bool2) {
  return (bool1 && bool2);
}

// Desafio 2
function calcArea(base, altura) {
  return (base * altura) / 2;
}

// Desafio 3
function splitSentence(string) {
  let array = [];
  array = string.split(' ');
  return array;
}

// Desafio 4
function concatName(array) {
  let string = `${array[array.length - 1]}, ${array[0]}`;
  return string;
}

// Desafio 5
function footballPoints(wins, ties) {
  return 3 * wins + ties;
}

function highestNumberFunction(array) {
  let aux = array[0];
  for (let index = 1; index < array.length; index += 1) {
    if (aux < array[index]) {
      aux = array[index];
    }
  }
  return aux;
}

// Desafio 6
function highestCount(array) {
  let highestNumber = highestNumberFunction(array);
  let contador = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (highestNumber === array[index]) {
      contador += 1;
    }
  }
  return contador;
}

console.log(highestCount([1, 3, 2, 4, 2, 4, 4]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distancia1 = cat1 - mouse;
  let distancia2 = cat2 - mouse;
  if (distancia1 < 0) {
    distancia1 *= -1;
  }
  if (distancia2 < 0) {
    distancia2 *= -1;
  }
  if (distancia1 < distancia2) {
    return 'cat1';
  } if (distancia2 < distancia1) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}

function modulo(num) {
  if (num % 3 === 0 && num % 5 === 0) return 'fizzBuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return 'bug!';
}

// Desafio 8
function fizzBuzz(array) {
  let secondArray = [];
  for (let num of array) {
    secondArray.push(modulo(num));
  }
  return secondArray;
}

console.log(fizzBuzz([3, 5, 15, 1]));

// Desafio 9
function encode(string) {
  let dicionario = {
    a: '1',
    e: '2',
    i: '3',
    o: '4',
    u: '5',
  };
  let secondString = '';
  for (let index = 0; index < string.length; index += 1) {
    if (dicionario[string[index]]) {
      secondString += dicionario[string[index]];
    } else {
      secondString += string[index];
    }
  }
  return secondString;
}

function decode(string) {
  let dicionario = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };
  let secondString = '';
  for (let index = 0; index < string.length; index += 1) {
    if (dicionario[string[index]]) {
      secondString += dicionario[string[index]];
    } else {
      secondString += string[index];
    }
  }
  return secondString;
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
