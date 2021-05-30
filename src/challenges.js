// Desafio 1
const compareTrue = (bool1, bool2) => bool1 && bool2;
// console.log(compareTrue(true, false));

// Desafio 2
const calcArea = (base, height) => base * (height / 2);
// console.log(calcArea(51, 1));

// Desafio 3
const splitSentence = (originalString) => originalString.split(' ');
// console.log(splitSentence('vamo que vamo'));

// Desafio 4
const concatName = (stringExterna) => {
  let arrai = stringExterna;
  return `${arrai[arrai.length - 1]}, ${arrai[0]}`;
};
// console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

// Desafio 5
const footballPoints = (wins, ties) => wins * 3 + ties;
// console.log(footballPoints(0, 0));

// Desafio 6
function highestCount(arrayDeNumeros) {
  return arrayDeNumeros.sort((a, b) => a < b)
    .reduce((acc, number) => {
      acc = arrayDeNumeros[0] === number ? acc += 1 : acc;
      return acc;
    }, 0);
}
console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let catWinner = '';
  const cat1Distance = Math.abs(mouse - cat1);
  const cat2Distance = Math.abs(mouse - cat2);

  if (cat1Distance < cat2Distance) {
    catWinner = 'cat1';
  } else if (cat2Distance < cat1Distance) {
    catWinner = 'cat2';
  } else if (cat1Distance === cat2Distance) {
    catWinner = 'os gatos trombam e o rato foge';
  }
  return catWinner;
}
// console.log(catAndMouse(10, 22, 22));

// Desafio 8
function fizzBuzz(arrayDeNumeros) {
  return arrayDeNumeros.map((number) => {
    if (number % 15 === 0) return 'fizzBuzz';
    if (number % 3 === 0) return 'fizz';
    if (number % 5 === 0) return 'buzz';
    return 'bug!';
  });
}

// console.log(fizzBuzz([7, 9, 25]));

// Desafio 9
function encode(string) {
  let newString = string;
  for (let letra of string) {
    newString = newString.replace('a', '1');
    newString = newString.replace('e', '2');
    newString = newString.replace('i', '3');
    newString = newString.replace('o', '4');
    newString = newString.replace('u', '5');
    // console.log(letra);
  }
  return newString;
}
// console.log(encode('hi there!'));

function decode(string) {
  let newString = string;
  for (let index of string) {
    newString = newString.replace('1', 'a');
    newString = newString.replace('2', 'e');
    newString = newString.replace('3', 'i');
    newString = newString.replace('4', 'o');
    newString = newString.replace('5', 'u');
    // console.log(index);
  }
  return newString;
}
// console.log(decode("h3 th2r2"));

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
