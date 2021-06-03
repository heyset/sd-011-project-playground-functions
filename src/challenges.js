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
/* SOLUCAO: Thiago Cavalcante */
function catAndMouse(mouse, cat1, cat2) {
  let distCat1 = Math.abs(mouse - cat1);
  let distCat2 = Math.abs(mouse - cat2);

  if (distCat1 === distCat2) {
    return 'os gatos trombam e o rato foge';
  }

  if (distCat1 < distCat2) {
    return 'cat1';
  }

  return 'cat2';

  // return distCat1 < distCat2 ? 'cat1' : 'cat2';
}

// console.log(catAndMouse(6, 1, 8));

/*
  SOLUCAO 01 (Nikolas Silva):
  const result = [];

  for (let index = 0; index < array.length; index += 1) {
    if (array[index] % 3 === 0 && array[index] % 5 === 0) {
      result.push('fizzBuzz');
    }
    else if (array[index] % 3 === 0) {
      result.push('fizz');
    }
    else if (array[index] % 5 === 0) {
      result.push('buzz');
    }
    else {
      result.push('bug!');
    }
  }

  return result;
*/

// Desafio 8
// SOLUCAO 02 (Brunao e Alberto):

/* function fizzBuzz(array) {
  const result = array
    .map((number) => (number % 15 === 0) ? 'fizzBuzz' : number)
    .map((number) => (number % 3 === 0) ? 'fizz' : number)
    .map((number) => (number % 5 === 0) ? 'buzz' : number)
    .map((number) => typeof(number) === 'number' ? 'bug!' : number);

  return result;
}

console.log(fizzBuzz([2, 15, 7, 9, 45]));
*/

// Desafio 9
// SOLUCAO 01 (Arthur e Rodolfo):
/* function encode(string) {
  string = string.replace(/a/gi, 1);
  string = string.replace(/e/gi, 2);
  string = string.replace(/i/gi, 3);
  string = string.replace(/o/gi, 4);
  string = string.replace(/u/gi, 5);

  return string;
}

console.log(encode("hi there! Rodolfo manda muito bem no map"));

function decode(string) {
  return string.split('')
    .map((value) => value === '1' ? 'a' : value === '2' ? 'e' : value === '3' ? 'i' : value === '4' ? 'o' : value === '5' ? 'u' : value).join('');
}

console.log(decode('h3 th2r2! R4d4lf4 m1nd1 m53t4 b2m n4 m1p'));
*/

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
