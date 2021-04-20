// Desafio 1
function compareTrue(boolean1, boolean2) {
  // seu código aqui
  let comparaVerdade = Boolean
    if ( boolean1 && boolean2  === true ){
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

  let firstLastNames = [arrayName[(arrayName.length) - 1], arrayName[0]];
  return firstLastNames;
  }

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let pontoCampeonato = wins * 3 + ties * 1;
  return pontoCampeonato
}

// Desafio 6
function highestCount() {
  // seu código aqui
  
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
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
