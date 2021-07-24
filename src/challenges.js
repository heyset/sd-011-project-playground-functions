// Desafio 1
function compareTrue(a, b) {
  return a && b;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(a) {
  return a.split(' ');
}

// Desafio 4
function concatName(a) {
  return `${a[a.length - 1]}, ${a[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties * 1;
}

// Desafio 6
function getHighestNumbers(a) {
  let highestNum = 0;
  for (let i of a) {
    if (i > highestNum) highestNum = i;
  }
  return highestNum;
}
function highestCount(a) {
  let count = 0;
  let highest = getHighestNumbers(a);
  for (let num of a) {
    if (num === highest) count += 1;
  }
  return count;
}

// Desafio 7
function catAndMouse(cat1, cat2, mouse) {
  let distCat1 = Math.abs(mouse - cat1);
  let distCat2 = Math.abs(mouse - cat2);
  if (distCat1 < distCat2) {
    return 'cat1';
  } if (distCat1 > distCat2) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function getFizzBuzz(num) {
  if (num % 3 === 0 && num % 5 === 0) return 'fizzBuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return 'bug!';
}

function fizzBuzz(arrayNum) {
  // eslint-disable-next-line sonarjs/no-unused-collection
  let result = [];
  for (let num of arrayNum) {
    result.push(getFizzBuzz(num));
  }
}

// Desafio 9
function encode(string) {
  let characters = string.split('');
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let decoded = [];
  for (let character of characters) {
    if (vowels.indexOf(character) >= 0) decoded.push(vowels.push(character) + 1);
    else decoded.push(character);
  }
  return decoded.join('');
}

function decode(decodedString) {
  let decodedArray = decodedString.split('');
  let vowels = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };
  let character2 = [];
  for (let character of decodedArray) {
    if (Object.keys(vowels).indexOf(character) >= 0) character2.push(vowels[character]);
    else character.push(character);
  }
  return character2.join('');
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
