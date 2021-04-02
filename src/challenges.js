// Desafio 1
function compareTrue(valorOne, ValorTwo) {
  return valorOne && ValorTwo;
};

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
};

// Desafio 3
function splitSentence(SeparateWords) {
  return (SeparateWords.split(' '));
};

// Desafio 4
function concatName(myArray) {
  let formatName = myArray[myArray.length - 1] + ', ' + myArray[0];
  return formatName;
};

// Desafio 5
function footballPoints(wins, ties) {
  let points = wins * 3 + ties * 1;
  return points;
};

// Desafio 6
function highestCount(listOfNumbers) {
  let count = 0;
  let highestNumber = listOfNumbers[0];
  for (let index = 1; index < listOfNumbers.length; index += 1) {
    if (listOfNumbers[index] > highestNumber) {
      highestNumber = listOfNumbers[index];
    }
  }
  for (let index = 0; index < listOfNumbers.length; index += 1) {
    if (listOfNumbers[index] === highestNumber) {
      count += 1;
    }
  }
  return count;
};

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(cat1 - mouse) > (cat2 - mouse)) {
    return 'cat2';
  }
  if (Math.abs(cat1 - mouse) < (cat2 - mouse)) {
    return 'cat1';
  }
    return 'os gatos trombam e o rato foge';
};

// Desafio 8
function fizzBuzz(divArray) {
  for (let index = 0; index < divArray.length; index += 1) {
    if (divArray[index] % 3 === 0 && divArray[index] % 5 === 0) {
      divArray[index] = 'fizzBuzz';
    } else if (divArray[index] % 3 === 0){
      divArray[index] = 'fizz';
    } else if (divArray[index] % 5 === 0){
      divArray[index] = 'buzz';
    } else if (divArray[index] % 1 === 0) {
      divArray[index] = 'bug!';
    }
  }
  return divArray;
};

// Desafio 9
function encode(encondeParam) {
  encondeParam = encondeParam.replace(/a/g, '1');
  encondeParam = encondeParam.replace(/e/g, '2');
  encondeParam = encondeParam.replace(/i/g, '3');
  encondeParam = encondeParam.replace(/o/g, '4');
  encondeParam = encondeParam.replace(/u/g, '5');
  return encondeParam;
};

function decode(decodeParam) {
  decodeParam = decodeParam.replace(/1/g, 'a');
  decodeParam = decodeParam.replace(/2/g, 'e');
  decodeParam = decodeParam.replace(/3/g, 'i');
  decodeParam = decodeParam.replace(/4/g, 'o');
  decodeParam = decodeParam.replace(/5/g, 'u');
  return decodeParam;
};

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
