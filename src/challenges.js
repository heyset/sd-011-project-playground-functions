// Desafio 1
function compareTrue(value1, value2) {
  return (value1 && value2);
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(str) {
  return str.split(' ');
}

// Desafio 4
function concatName(arrayStrings) {
  let finalString = (arrayStrings[arrayStrings.length - 1] + ', ' + arrayStrings[0]);
  return finalString; 
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = ((wins * 3) + (ties * 1));
  points = points || 0;
  return points;
}

// Desafio 6
function highestCount(numbers) {
  let highestNumber = Math.max(...numbers);
  let numberRepetitions = 0;
  for (let i = 0; i < numbers.length; i += 1) {
    if (highestNumber === numbers[i]) {
      numberRepetitions += 1;
    }
  }
  return numberRepetitions;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if ((cat1 - mouse) < (cat2 - mouse)) {
    return 'cat1';
  } else if ((cat1 - mouse) > (cat2 - mouse)) {
    return 'cat2';
  } else {
    return 'os gatos trombam e o rato foge';
  }
  // calcular distância entre mouse-cat1 e mouse-cat2
  // se mc1 < mc2 -> return "cat1"
  // se mc1 > mc2 -> return "cat2"
  // se mc1 == mc2 -> return "os gatos trombam e o rato foge"
}

// Desafio 8
function fizzBuzz(numbers) {
  let resultString = [];
  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] % 3 === 0 && numbers[i] % 5 !== 0) {
      resultString.push('fizz');
    } else if (numbers[i] % 5 === 0 && numbers[i] % 3 !== 0) {
      resultString.push('buzz');
    } else if (numbers[i] % 5 === 0 && numbers[i] % 3 === 0) {
      resultString.push('fizzBuzz');
    } else {
      resultString.push('bug!');
    }
  }
  return resultString;
}

// Desafio 9
function encode(str) {
  let codeSting = str.replace(/a/g, '1')
    .replace(/e/g, '2')
    .replace(/i/g, '3')
    .replace(/o/g, '4')
    .replace(/u/g, '5');
  return codeSting;
}

function decode(str) {
  let decodeString = str.replace(/1/g, 'a')
    .replace(/2/g, 'e')
    .replace(/3/g, 'i')
    .replace(/4/g, 'o')
    .replace(/5/g, 'u');
  return decodeString;
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
