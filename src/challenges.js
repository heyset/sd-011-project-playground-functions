// Desafio 1
function compareTrue(pinky, cerebro) {
  if (pinky === true && cerebro === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(array) {
  let firstIndex = array [0];
  let lastIndex = array [array.length - 1];
  return (lastIndex + ', ' + firstIndex);
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = ((wins * 3) + ties);
  return (points);   
}

// Desafio 6
function highestCount(array) {
  let checkHighestNumber = Math.max(array);
  for(let index = 0; index < array.length; index =+1) {
    let checkRepetition = index;
    if (array[index] === index) {
      index +=1;
      return checkRepetition
    }    
  }   
}
 
// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  
}

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
