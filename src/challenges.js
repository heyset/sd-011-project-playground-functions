// Desafio 1
const compareTrue = (boolean, boolean2) => {
  return boolean && boolean2
};


// Desafio 2
const calcArea = (a, b) => a * b /2;

// Desafio 3
const splitSentence = (str) => str.split(' ');

// Desafio 4
const concatName = (str) => `${str.pop()}, ${str.shift()}`;

// Desafio 5
const footballPoints = (wins, ties) => wins * 3 + ties * 1;

// Desafio 6
function highestCount(arr) {
  const max = Math.max(...arr);
  const count = arr.reduce((acc, cur) => acc + (cur === max),0);
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let catAPos = Math.abs(mouse - cat1);
  let catBPos = Math.abs(mouse - cat2);
  if(catAPos < catBPos) return 'cat1';
  else if(catAPos > catBPos) return 'cat2';
  else  return "os gatos trombam e o rato foge";
}

// Desafio 8
const fizzBuzz = (arr) => {
  arr.forEach((num) => {
    (num % 3 === 0 && num % 5 === 0) ? 'FizzBuzz' 
    :(num % 3 === 0 ) ? 'Buzz' : 'Fizz';
  });
}

// Desafio 9
function encode(str) {
  const strArr = str.split('');
  for (let i = 0; i < strArr.length; i += 1) {
    if (strArr[i] === 'a') {
      strArr[i] = 1;
    } else if (strArr[i] === 'e') {
      strArr[i] = 2;
    } else if (strArr[i] === 'i') {
      strArr[i] = 3;
    } else if (strArr[i] === 'o') {
      strArr[i] = 4;
    } else if (strArr[i] === 'u') {
      strArr[i] = 5;
    }
  }
  return strArr.join('');
}

// console.log(encode("hi there!"));


function decode(str) {
  const strArr = str.split('');
  for (let i = 0; i < strArr.length; i += 1) {
    if (strArr[i] === '1') {
      strArr[i] = 'a';
    } else if (strArr[i] === '2') {
      strArr[i] = 'e';
    } else if (strArr[i] === '3') {
      strArr[i] = 'i';
    } else if (strArr[i] === '4') {
      strArr[i] = 'o';
    } else if (strArr[i] === '5') {
      strArr[i] = 'u';
    }
  }
  return strArr.join('');
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
