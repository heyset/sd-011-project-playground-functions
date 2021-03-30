// Desafio 1
function compareTrue(valor1, valo2) {
  return valor1 && valo2;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(word) {
  return word.split(' ');
}

// Desafio 4
function concatName(names) {
  let firstAndLast = [];
  firstAndLast.push(names[names.length - 1], ' ' + names[0]);
  return firstAndLast.toString();
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + (ties);
}

// Desafio 6
function highestCount(numbers) {
  let higherNum = 0;
  let timesNum = 0;
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] > higherNum) {
      higherNum = numbers[index];
    }
  }
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] === higherNum) {
      timesNum += 1;
    }
  }
  return timesNum;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distCat1 = Math.abs(cat1 - mouse);
  let distCat2 = Math.abs(cat2 - mouse);
  if (distCat1 === distCat2) {
    return 'os gatos trombam e o rato foge'
  } else if (distCat2 > distCat1) {
    return 'cat1'
  } else {
    return 'cat2'
  }
}
0.
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
