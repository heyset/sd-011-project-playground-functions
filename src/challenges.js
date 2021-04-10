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
  let sequence = numbers.sort();
  let higher = sequence[numbers.length - 1];
  let regress = 0;
  for(let index in numbers){
    if(numbers[index] === higher){
      regress += 1;
    }
  }
  return regress;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let range1 = Math.abs(mouse - cat1);
  let range2 = Math.abs(mouse - cat2);
  if (range1 < range2){
    return 'cat1';
  } else if(range2 < range1){
    return 'cat2';
  } else{
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz() {
  function aux(number){
    if(number % 3 === 0){
      return 'fizz';
    }
    if(number % 5 === 0){
      return 'buzz';
    }
    if(number % 15 === 0){
      return 'fizzBuzz';
    }
    return 'bug!';
  }

  function fizzBuzz(array){
    let result = [];
    for(let number of array){
      result.push(aux(number));
    }
    return result;
  }
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
