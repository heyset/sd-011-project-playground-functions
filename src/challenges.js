// Desafio 1
function compareTrue(bool1, bool2) {
  return (bool1 === true && bool2 === true);
}
console.log(compareTrue(true, false));

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}
console.log(calcArea(5, 10));

// Desafio 3
// https://www.w3schools.com/jsref/jsref_split.asp //
function splitSentence(sentence) {
  return sentence.split(' ');
}
console.log(splitSentence('Vivian Maria Braga'));

// Desafio 4
function concatName(names) {
  return `${names[names.length - 1]}, ${names[0]}`;
}
console.log(concatName(['Vivian', 'Maria', 'Braga']));

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties;
}
console.log(footballPoints(14, 8));

// Desafio 6
// Ajuda do aluno Luiz Wendel, que demonstrou com muita sapiência que uma função nao consegue chamar uma varável contida em função, e que pra isso era necessario nomear uma variável com o retorno da funcao para dai, sim, a mesma ser usado na funcao desejada.
function highestNumber(numbers) {
  let storeHigher = [];
  if (numbers[0] > numbers[1]) {
    storeHigher = numbers[0];
  } else {
    storeHigher = numbers[1];
  }
  for (let index = 2; index < numbers.length; index += 1) {
    if (storeHigher < numbers[index]) {
      storeHigher = numbers[index];
    }
  }
  return storeHigher;
}

function highestCount(numbers) {
  let ammount = 0;
  let highest = 0;
  highest = highestNumber(numbers);
  for (let index2 = 0; index2 < numbers.length; index2 += 1) {
    if (highest === (numbers[index2])) {
      ammount += 1;
    }
  }
  return ammount;
}
console.log(highestCount([1, 2, 7, 23, 23, 23, 5, 7, 11]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(cat1 - mouse) === Math.abs(cat2 - mouse)) {
    return 'os gatos trombam e o rato foge';
  } if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)) {
    return 'cat1';
  }
  return 'cat2';
}
console.log(catAndMouse(100, 102, 101));

// Desafio 8
function checkNumber(numberArray) {
  if (numberArray % 15) {
    return 'fizzBuzz';
  } if (numberArray % 3 === 0) {
    return 'fizz';
  } if (numberArray % 5 === 0) {
    return 'buzz';
  }
  return 'bug!';
}

function fizzBuzz(numbers) {
  let fizzBuzz1 = [];
  for (let index = 0; index < numbers.length; index += 1) {
    fizzBuzz1.push(checkNumber(numbers[index]));
  }
  return fizzBuzz1;
}

console.log(fizzBuzz([2, 15, 7, 9, 45]));

// Desafio 9
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/joinfunction encode() { //
function encode(sentence) {
  let assembSentence = [];
  for (let index = 0; index < sentence.length; index += 1) {
    if (sentence[index] === 'a') {
      assembSentence.push('1');
    } else if (sentence[index] === 'e') {
      assembSentence.push('2');
    } else if (sentence[index] === 'i') {
      assembSentence.push('3');
    } else if (sentence[index] === 'o') {
      assembSentence.push('4');
    } else if (sentence[index] === 'u') {
      assembSentence.push('5');
    } else {
      assembSentence.push(sentence[index]);
    }
  }
  return assembSentence.join('');
}
console.log(encode('hoje vai chover'));

function decode(sentence) {
  let originalSentence = [];
  for (let index = 0; index < sentence.length; index += 1) {
    if (sentence[index] === '1') {
      originalSentence.push('a');
    } else if (sentence[index] === '2') {
      originalSentence.push('e');
    } else if (sentence[index] === '3') {
      originalSentence.push('i');
    } else if (sentence[index] === '4') {
      originalSentence.push('o');
    } else if (sentence[index] === '5') {
      originalSentence.push('u');
    } else {
      originalSentence.push(sentence[index]);
    }
  }
  return originalSentence.join('');
}
console.log(decode('h4j2 v13 ch4v2r'));

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
