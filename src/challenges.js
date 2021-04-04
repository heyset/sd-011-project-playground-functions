// Desafio 1
function compareTrue(param1, param2) {
  if (param1 && param2 === true) {
    return true;
  } else {
    return false;
  }
}

console.log(compareTrue(true, false));

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

console.log(calcArea(51, 1));

// Desafio 3
function splitSentence(string) {
  let array = string.split(' ');
  return array;
}

console.log(splitSentence('go trybe'));

// Desafio 4
function concatName(arrayOfStrings) {
  let firstItem = arrayOfStrings[0];
  let lastItem = arrayOfStrings[arrayOfStrings.length - 1];
  let stringConcat = lastItem + ', ' + firstItem;
  return stringConcat;
}

console.log(concatName(['captain', 'my', 'captain']));

// Desafio 5
function footballPoints(wins, ties) {
  let championshipResult = (wins * 3) + (ties * 1);
  return championshipResult;
}

console.log(footballPoints(1, 2));

// Desafio 6
function higherNum (arrayNumbers, currentNum) {
  currentNum = arrayNumbers[0];
  for (let index = 1; index < arrayNumbers.length; index += 1) {
    if (arrayNumbers[index] > currentNum) {
      currentNum === arrayNumbers[index];
    }
  }
  return currentNum;
}
function highestCount(arrayNumbers, higherNum) {
  let repetHigherNum = 0;
  for (let index = 0; index < arrayNumbers.length; index += 1) {
    if (arrayNumbers[index] === higherNum) {
      repetHigherNum += 1;
    }
  }
  return repetHigherNum;
}

console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if ((cat1 - mouse) < (cat2 - mouse)) {
    return 'cat1';
  } else if ((cat2 - mouse) < (cat1 - mouse)) {
    return 'cat2';
  } else {
    return 'os gatos trombam e o rato foge';
  }
}

console.log(catAndMouse(1, 2, 2));

// Desafio 8
function fizzBuzz(numbersArray) {
  let resultArray = [];
  for (let index = 0; index < numbersArray.length; index += 1) {
    if (numbersArray[index] % 3 === 0 && numbersArray[index] % 5 === 0) {
      resultArray.push('fizzBuzz');
    } else if (numbersArray[index] % 3 === 0) {
      resultArray.push('fizz');
    } else if (numbersArray[index] % 5 === 0) {
      resultArray.push('buzz');
    } else {
      resultArray.push('bug!');
    }
  }
  return resultArray;
}

console.log(fizzBuzz([2, 15, 7, 9, 45]));

// Desafio 9
function encode(lowercaseVowels) {
  let fraseEncode = [''];
  for (let index = 0; index < lowercaseVowels.length; index += 1) {
    switch (lowercaseVowels[index]) {
    case 'a':
      fraseEncode = fraseEncode + '1';
      break;
    case 'e':
      fraseEncode = fraseEncode + '2';
      break;
    case 'i':
      fraseEncode = fraseEncode + '3';
      break;
    case 'o':
      fraseEncode = fraseEncode + '4';
      break;
    case 'u':
      fraseEncode = fraseEncode + '5';
      break;
    default:
      fraseEncode = fraseEncode + lowercaseVowels[index];
    }
  }
  return fraseEncode;
}

console.log(encode('hi there!'));

function decode(uppercaseVowels) {
  let fraseDecode = [];
  for (let index = 0; index < uppercaseVowels.length; index += 1) {
  switch (uppercaseVowels[index]) {
    case '1':
      fraseDecode = fraseDecode + 'a';
      break;
    case '2':
      fraseDecode = fraseDecode + 'e';
      break;
    case '3':
      fraseDecode = fraseDecode + 'i';
      break;
    case '4':
      fraseDecode = fraseDecode + 'o';
      break;
    case '5':
      fraseDecode = fraseDecode + 'u';
      break;
    default:
      fraseDecode = fraseDecode + uppercaseVowels[index];
    }
  }
  return fraseDecode;
}

console.log(decode('h3 th2r2!'));

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
