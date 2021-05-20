// Matheus Antonio - Zeonnatios
// Desafio 1
function compareTrue(value1, value2) {
  return value1 && value2;
}

// Desafio 2
function calcArea(base, heigth) {
  return (base * heigth) / 2;
}

// Desafio 3
function splitSentence(phrase) {
  return phrase.split(' ');
}

// Desafio 4
function concatName(strArr) {
  return `${strArr[strArr.length - 1]}, ${strArr[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties;
}

// Desafio 6
function highestCount(arrNumbers) {
  return arrNumbers.filter((value, _, arr) => value === Math.max(...arr)).length;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  const cat1Position = Math.abs(mouse - cat1);
  const cat2Position = Math.abs(mouse - cat2);
  return cat1Position > cat2Position ? 'cat2' :
    cat1Position < cat2Position  ? 'cat1'
    : 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(arr) {
  return arr.map((value) => {
    return (value % 3 === 0) & (value % 5 === 0) ? 'fizzBuzz' :
      value % 3 === 0 ? 'fizz' :
      value % 5 === 0 ? 'buzz' :
      'buzz';
  });
}

// Desafio 9
function encode(phrase) {
  return phrase.split('').map((value) => {
    return value === 'a' ? '1' :
      value === 'e' ? '2' :
      value === 'i' ? '3' :
      value === 'o' ? '4' :
      value === 'u' ? '5' :
      value;
  }).join('');
}

function decode(phrase) {
  return phrase.split('').map((value) => {
    return value === '1' ? 'a' :
      value === '2' ? 'e' :
      value === '3' ? 'i' :
      value === '4' ? 'o' :
      value === '5' ? 'u' :
      value;
  }).join('');
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
