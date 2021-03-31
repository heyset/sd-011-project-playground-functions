// Desafio 1 - ok
function compareTrue(par, impar) {
  return par && impar;
}

// Desafio 2 - ok
function calcArea(a, b) {
  let area = (a * b) / 2;
  return (area);
}

// Desafio 3 - ok
function splitSentence(string) {
  let arrayString = string.split(' ');
  return arrayString;
}

// Desafio 4 - ok
function concatName(array) {
  let primeiroNome = array[0];
  let ultimoNome = array[array.length - 1];
  return (ultimoNome + ', ' + primeiroNome);
}

// Desafio 5 - ok
function footballPoints(wins, ties) {
  let operacao = (3 * wins) + ties;
  return operacao;
}

// Desafio 6 - ok

function highestCount(array) {
  let maiorNumero = array[0];
  for (let index = 1; index < array.length; index += 1) {
    if (array[index] > maiorNumero) {
      maiorNumero = array[index];
    }
  }
  let contador = 0;
  for (let indexCont = 0; indexCont < array.length; indexCont += 1) {
    if (array[indexCont] === maiorNumero) {
      contador += 1;
    }
  }
  return contador;
}
function arraytest() {
  if (test = [9, 1, 2, 3, 9, 5, 7]) {
    let resultado = console.log(highestCount(test));
  }
  return arraytest
}

// Desafio 7 -ok
function catAndMouse(mouse, cat1, cat2) {
  let distanciaCat1 = Math.abs(cat1 - mouse);
  let distanciaCat2 = Math.abs(cat2 - mouse);
  let resultado = '';
  if (distanciaCat2 < distanciaCat1) {
    resultado = 'cat2';
  } else if (distanciaCat2 > distanciaCat1) {
    resultado = 'cat1';
  } else {
    resultado = 'os gatos trombam e o rato foge';
  }
  return resultado;
}
  
// Desafio 8 -ok
function fizzBuzz(arrayNumbers) {
  let comparacao = [];
    for (let index = 0; index < arrayNumbers.length; index += 1) {
      if (arrayNumbers[index] % 3 === 0 && arrayNumbers[index] % 5 === 0) {
        comparacao.push('fizzBuzz');
      } else if (arrayNumbers[index] % 5 === 0) {
        comparacao.push('buzz');
      } else if (arrayNumbers[index] % 3 === 0) {
        comparacao.push('fizz');
      } else {
        comparacao.push('bug!');
      }
    }
  return comparacao;
}
console.log(fizzBuzz([2, 15, 7, 9, 45]));

// Desafio 9
function encode(frase) {
  for (let index = 0; index < frase.length; index += 1){
    frase = frase.replace('a', '1');
    frase = frase.replace('e', '2');
    frase = frase.replace('i', '2');
    frase = frase.replace('o', '4');
    frase = frase.replace('u', '4');
  }
  return frase
}
function decode(frase) {
  for (let index = 0; index < frase.length; index += 1){
    frase = frase.replace('1', 'a');
    frase = frase.replace('2', 'e');
    frase = frase.replace('3', 'i');
    frase = frase.replace('4', 'o');
    frase = frase.replace('4', 'u');
  }
  return frase
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
