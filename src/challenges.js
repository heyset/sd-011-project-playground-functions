// Desafio 1
function compareTrue(bool1, bool2) {
  return bool1 && bool2;
}

console.log(compareTrue(false, true));
console.log(compareTrue(true, false));
console.log(compareTrue(false, false));
console.log(compareTrue(true, true));

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

console.log(calcArea(10, 50));
console.log(calcArea(5, 2));
console.log(calcArea(51, 1));

// Desafio 3
function splitSentence(sentence) {
  let wordArray = [];
  let currentWord = '';

  for (let i = 0; i < sentence.length; i += 1) {
    if (sentence[i] === ' ') {
      wordArray.push(currentWord);
      currentWord = '';
    } else if (i === sentence.length - 1) {
      currentWord += sentence[i];
      wordArray.push(currentWord);
    } else {
      currentWord += sentence[i];
    }
  }

  return wordArray;
}

console.log(splitSentence('go Trybe'));
console.log(splitSentence('vamo que vamo'));
console.log(splitSentence('foguete'));

// Desafio 4
function concatName(nameArray) {
  let firstName = nameArray[0];
  let lastName = nameArray[nameArray.length - 1];

  let nameString = `${lastName}, ${firstName}`;

  return nameString;
}

console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));
console.log(concatName(['foguete', 'não', 'tem', 'ré']));
console.log(concatName(['captain', 'my', 'captain']));

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties;
}

console.log(footballPoints(14, 8));
console.log(footballPoints(1, 2));
console.log(footballPoints(0, 0));

// Desafio 6
function highestCount(intArray) {
  let sortedArray = intArray.sort((a, b) => b - a);
  let count = 1;
  let highest = sortedArray[0];

  for (let i = 1; i < sortedArray.length; i += 1) {
    if (sortedArray[i] === highest) {
      count += 1;
    } else {
      break;
    }
  }

  return count;
}

console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));
console.log(highestCount([0, 4, 4, 4, 9, 2, 1]));
console.log(highestCount([0, 0, 0]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let cat1Dist = Math.abs(cat1 - mouse);
  let cat2Dist = Math.abs(cat2 - mouse);

  if (cat1Dist === cat2Dist) {
    return 'os gatos trombam e o rato foge';
  }

  if (cat1Dist > cat2Dist) {
    return 'cat2';
  }

  return 'cat1';
}

console.log(catAndMouse(0, 3, 2));
console.log(catAndMouse(0, 6, 12));
console.log(catAndMouse(0, 6, -6));

// Desafio 8
function singleFizzBuzz(int) {
  if (int % 15 === 0) {
    return 'fizzBuzz';
  }

  if (int % 3 === 0) {
    return 'fizz';
  }

  if (int % 5 === 0) {
    return 'buzz';
  }

  return 'bug!';
}

function fizzBuzz(intArray) {
  let fizzBuzzArray = [];

  for (let num of intArray) {
    fizzBuzzArray.push(singleFizzBuzz(num));
  }

  return fizzBuzzArray;
}

console.log(fizzBuzz([2, 15, 7, 9, 45]));
console.log(fizzBuzz([7, 9]));
console.log(fizzBuzz([9, 25]));

// Desafio 9
let cryptoDictionary = {
  a: 1,
  e: 2,
  i: 3,
  o: 4,
  u: 5,
  1: 'a',
  2: 'e',
  3: 'i',
  4: 'o',
  5: 'u',
};

function encode(sentence) {
  let encodedSentence = '';

  for (let char of sentence) {
    if (cryptoDictionary[char]) {
      encodedSentence += cryptoDictionary[char];
    } else {
      encodedSentence += char;
    }
  }

  return encodedSentence;
}

console.log(encode('hi there!'));

function decode(sentence) {
  let decodedSentence = '';

  for (let char of sentence) {
    if (parseInt(char, 10) < 6 && parseInt(char, 10) > 0) {
      decodedSentence += cryptoDictionary[parseInt(char, 10)];
    } else {
      decodedSentence += char;
    }
  }

  return decodedSentence;
}

console.log(decode('h3 th2r2!'));

module.exports = {
  compareTrue,
  calcArea,
  splitSentence,
  concatName,
  footballPoints,
  highestCount,
  catAndMouse,
  fizzBuzz,
  encode,
  decode,
};
