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
const footballPoints = (wins, ties) => {
  const winsAmmount = wins * 3;
  const tiesAmmount = ties * 1;
  return winsAmmount + tiesAmmount;
}
console.log(footballPoints(1, 2));

// Desafio 6
const highestCount = (arr) => {
  let hightestNumber = Math.max.apply(null, arr);
  let count = 0;
  
  for (let i = 0; i < arr.length; i += 1) {
    if (hightestNumber === arr[i]) {
      count += 1;
    }
  }
  return count;
}

console.log(highestCount([0, 0, 0]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let catAPos = Math.abs(mouse - cat1);
  let catBPos = Math.abs(mouse - cat2);
  if (catAPos < catBPos) {
    return "cat1";
  } else if (catBPos < catAPos) {
    return "cat2";
  } else {
    return "os gatos trombam e o rato foge";
  }
}
console.log(catAndMouse(10, 13, 13));

// Desafio 8
const fizzBuzz = (arr) => {
  const arrayFizzBuzz = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] % 3 === 0 && arr[i] % 5 === 0) {
      arrayFizzBuzz.push("fizzBuzz");
    } else if (arr[i] % 3 === 0) {
      arrayFizzBuzz.push("fizz");
    } else if (arr[i] % 5 === 0) {
      arrayFizzBuzz.push("buzz");
    } else {
      arrayFizzBuzz.push("bug!");
    }
  }
  return arrayFizzBuzz
}

console.log(fizzBuzz([9, 25]));

// Desafio 9
function encode(string) {
  let arrayCode = string.split('');
  for (index = 0; index < arrayCode.length; index += 1) {
    if (arrayCode[index] === 'a') {
      arrayCode.splice(index, 1, '1');
    }
    if (arrayCode[index] === 'e') {
      arrayCode.splice(index, 1, '2');
    }
    if (arrayCode[index] === 'i') {
      arrayCode.splice(index, 1, '3');
    }
    if (arrayCode[index] === 'o') {
      arrayCode.splice(index, 1, '4');
    }
    if (arrayCode[index] === 'u') {
      arrayCode.splice(index, 1, '5');
    }
  }

  let codedTxt = arrayCode.join('');
  return codedTxt;
}

console.log(encode("h3 th2r2!"));


function decode(string) {
  let arrayUnCode = string.split('');
  for (index = 0; index < arrayUnCode.length; index += 1) {
    if (arrayUnCode[index] === '1') {
      arrayUnCode.splice(index, 1, 'a');
    }
    if (arrayUnCode[index] === '2') {
      arrayUnCode.splice(index, 1, 'e');
    }
    if (arrayUnCode[index] === '3') {
      arrayUnCode.splice(index, 1, 'i');
    }
    if (arrayUnCode[index] === '4') {
      arrayUnCode.splice(index, 1, 'o');
    }
    if (arrayUnCode[index] === '5') {
      arrayUnCode.splice(index, 1, 'u');
    }
  }

  let codedTxt = arrayUnCode.join('');
  return codedTxt;
}

console.log(decode("h3 th2r2"));

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
