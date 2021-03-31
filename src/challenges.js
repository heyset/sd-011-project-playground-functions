// Desafio 1
function compareTrue(boolValue1, boolValue2) {
  if (boolValue1 && boolValue2) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  let triangArea = (base * height) / 2;
  return triangArea;
}

// Desafio 3
function splitSentence(stringToSplit) {
  let splitResult = stringToSplit.split(' ');
  return splitResult;
}

// Desafio 4
function concatName(arrayConcat) {
  let concatResult = `${arrayConcat[arrayConcat.length - 1]}, ${arrayConcat[0]}`;
  return concatResult;
}

// Desafio 5
function footballPoints(wins, ties) {
  let score;
  let pointWins = 3;
  let pointTies = 1;
  score = wins * `${pointWins}` + ties * `${pointTies}`;
  return score;
}

function biggestNumber(numbersArray) {
  let highestNumber = 0;
  for (let index = 0; index < numbersArray.length; index += 1) {
    if (numbersArray[index] > highestNumber) {
      highestNumber = numbersArray[index];
    }
  }
  return highestNumber;
}

// Desafio 6
function highestCount(arrayCountBiggest) {
  let highestValue = biggestNumber(arrayCountBiggest);
  let countHighestValue = 0;
  for (let index = 0; index < arrayCountBiggest.length; index += 1) {
    if (arrayCountBiggest[index] === highestValue) {
      countHighestValue += 1;
    }
  }
  return countHighestValue;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distMouseCat1 = Math.abs(mouse - cat1);
  let distMouseCat2 = Math.abs(mouse - cat2);
  if (distMouseCat1 < distMouseCat2) {
    return 'cat1';
  } if (distMouseCat2 < distMouseCat1) {
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
