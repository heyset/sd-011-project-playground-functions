// Desafio 1
function compareTrue(boolean1, boolean2) {
  // seu código aqui
  let comparaVerdade = Boolean
  if (boolean1 && boolean2 === true){
    comparaVerdade = true
  }
  else {
    comparaVerdade = false
  }
        
  return comparaVerdade
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let area = (base * height) / 2

  return area

}

// Desafio 3
function splitSentence(sentence) {
  // seu código aqui
  return sentence.split(' ');
}

// Desafio 4
function concatName(arrayName) {
  // seu código aqui

  let firstLastNames = (arrayName[(arrayName.length) - 1]) + ', ' + (arrayName[0]);
  return firstLastNames;
  }

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let pontoCampeonato = wins * 3 + ties * 1;
  return pontoCampeonato
}

// Desafio 6
  // seu código aqui
function findHigherNumber(arrayOfNumbers) {
  let higherNumber = 0;
  for (let index = 0; index < arrayOfNumbers.length; index += 1) {
    if (arrayOfNumbers[index] > higherNumber) {
      higherNumber = arrayOfNumbers[index];
    }
  }
  return higherNumber;
}
function highestCount(arrayOfNumbers) {
  let countingHigherNumber = 0;
  for (let index = 0; index < arrayOfNumbers.length; index += 1) {
    if (arrayOfNumbers[index] === findHigherNumber(arrayOfNumbers)) {
      countingHigherNumber += 1;
    }
  }
  return countingHigherNumber;
  
}
// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
    cat1 = Math.abs(mouse - cat1);
    cat2 = Math.abs(mouse - cat2);
    if (cat1 === cat2) {
      return 'os gatos trombam e o rato foge';
    }
    if ((cat2) < (cat1)) {
      return 'cat2';
    }
    if ((cat1) < (cat2)) {
      return 'cat1';
    }
}


// Desafio 8
// seu código aqui
  function searchingFizzBuzz(value) {
    if (value % 15 === 0) {
      return 'fizzBuzz';
    }
    if (value % 3 === 0) {
      return 'fizz';
    }
    if (value % 5 === 0) {
      return 'buzz';
    }
    return 'bug!';
  }
  function fizzBuzz(arrayOfNumbers) {
    let arrayOfFizBuzz = [];
    for (let index = 0; index < arrayOfNumbers.length; index += 1) {
      arrayOfFizBuzz.push(searchingFizzBuzz(arrayOfNumbers[index]));
    }
    return arrayOfFizBuzz;
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
