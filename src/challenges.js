// Desafio 1
function compareTrue(condicao1, condicao2) {
  if (condicao1 && condicao2 === true) {
    return true;
  }
  return false;
}
// Desafio 2
function calcArea(base, height) {
  let resultado = base * height;
  return resultado / 2;
}
// Desafio 3
function splitSentence(frase) {
  let resultado = frase.split(' ');
  return resultado;
}

// Desafio 4
function concatName(array) {
  let fullName = `${array[array.length - 1]}, ${array[0]}`;
  return fullName;
}
// // Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}
// // Desafio 6
function highestCount(number) {
  let maiorNum = 0;
  let contador = 0;
  for (let index = 0; index < number.length; index += 1) {
    if (number[index] > maiorNum) {
      maiorNum = number[index];
      contador = 1;
    } else if (maiorNum === number[index]) {
      contador += 1;
    }
  }
  return contador;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let resultadoCat1 = Math.abs(mouse - cat1);
  let resultadoCat2 = Math.abs(mouse - cat2);

  if (resultadoCat1 === resultadoCat2) {
    return 'os gatos trombam e o rato foge';
  }
  if (resultadoCat1 < resultadoCat2) {
    return 'cat1';
  }
  return 'cat2';
}
// Desafio 8
function calcFizzBuzz(number) {
  if (number % 5 === 0 && number % 3 === 0) {
    return 'fizzbuzz';
  }
  if (number % 3 === 0) {
    return 'fizz';
  }
  if (number % 5 === 0) {
    return 'buzz';
  }
  return 'bug!git';
}

function fizzBuzz(number) {
  let frase = [];

  for (let indice = 0; indice < number.length; indice += 1) {
    frase.push(calcFizzBuzz(number[indice]));
  }
  return frase;
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
