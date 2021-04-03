// Desafio 1
function compareTrue(value1, value2) {
  // seu código aqui
  return value1 && value2;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(sentence) {
  // seu código aqui
  return sentence.split(' ');
}

// Desafio 4
function concatName(frase) {
  // seu código aqui
  let space = ', ';
  return frase[frase.length - 1] + space + frase[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(arrNum) {
  // seu código aqui
  let qtdMaxNum = 0;
  let maxNum = 0;

  for (let index = 0; index < arrNum.length; index += 1) {
    maxNum = Math.max(...arrNum);
  }

  for (let index2 = 0; index2 < arrNum.length; index2 += 1) {
    if (maxNum === arrNum[index2]) {
      qtdMaxNum += 1;
    }
  }

  return qtdMaxNum;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let result;
  let distanceCat1 = mouse - cat1; let distanceCat2 = mouse - cat2;

  if (distanceCat1 < 0) {
    distanceCat1 *= -1;
  } else if (distanceCat2 < 0) {
    distanceCat2 *= -1;
  }

  if (distanceCat1 < distanceCat2) {
    result = 'cat1';
  } else if (distanceCat2 < distanceCat1) {
    result = 'cat2';
  } else {
    result = 'os gatos trombam e o rato foge';
  }
  return result;
}

// Desafio 8
function convert(arrNum) {
  if (arrNum % 15 === 0) {
    return 'fizzBuzz';
  } if (arrNum % 3 === 0) {
    return 'fizz';
  } if (arrNum % 5 === 0) {
    return 'buzz';
  }
  return 'bug!';
}

function fizzBuzz(arrNum) {
  // seu código aqui
  let result = [];

  for (let index = 0; index < arrNum.length; index += 1) {
    result.push(convert(arrNum[index]));
  }

  return result;
}

// Desafio 9
function encode(frase) {
  // seu código aqui
  let cript = frase.replace(/a/g, '1')
    .replace(/e/g, '2')
    .replace(/i/g, '3')
    .replace(/o/g, '4')
    .replace(/u/g, '5');

  return cript;
}
function decode(frase) {
  // seu código aqui
  let cript = frase.replace(/1/g, 'a')
    .replace(/2/g, 'e')
    .replace(/3/g, 'i')
    .replace(/4/g, 'o')
    .replace(/5/g, 'u');

  return cript;
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
