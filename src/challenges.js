// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true){
    return true
  }  else{
    return false
  }                                                                                                                                                                           
} console.log( compareTrue(true,true))

// Desafio 2
function calcArea(base, height) {
 return (base * height) / 2.
} console.log(calcArea(10, 50))

// Desafio 3
function splitSentence(frase) {
  return frase.split(' ')
} console.log(splitSentence("go Trybe"))

// Desafio 4
function concatName(array) {
  return ` ${array[array.length-1]} , ${array[0]}`
} console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']))

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3 ) + ties
} console.log(footballPoints(14,8))

// Desafio 6
function highestCount() {
  let moreNumber = 
  for (let index = 0)
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
