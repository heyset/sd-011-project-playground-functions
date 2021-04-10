// Desafio 1
function compareTrue(value1, value2) {
  if(value1 && value2 === true){
    return true;
  }
    return false;
}

// Desafio 2
function calcArea(base, height) {
  return (height * base)/2;
}

// Desafio 3
function splitSentence(phrase) {
  return phrase.split(' ');
}

// Desafio 4
function concatName(phrase) {
  return `${phrase[phrase.length - 1]}, ${phrase[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties;
}

// Desafio 6
function highestCount(numbers) {
  let count = 0;
  let highNumber = getHighestNumber(numbers);
  for(let number of numbers){
    if(number === highNumber){
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let rangeCat1 = Math.abs(mouse - cat1);
  let rangeCat2 = Math.abs(mouse - cat2);
  if(rangeCat1 > rangeCat2){
    return cat2;
  }else{
    return cat1;
  }
  return 'Os gatos trombaram e o rato foge';
}

// Desafio 8
function fizzBuzz(vect) {
  let newVect = [];
  for(let numbers of vect){
    newVect.push(getWordFromNumber(numbers));
  }
  return newVect;
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
