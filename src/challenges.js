// Desafio 1
function compareTrue(valor1, valor2) {
  return valor1 && valor2;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(frase) {
  let retorno = [];
  retorno = frase.split(' ');
  return retorno;
}

// Desafio 4
function concatName(frases) {
  // seu código aqui
  let primeiro = '';
  let retorno = '';
  primeiro = frases[frases.length - 1];
  retorno = `${primeiro}, ${frases[0]}`;
  return retorno;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  return (wins * 3) + (ties * 1);
}

// Desafio 6
function highestCount(numeros) {
  // seu código aqui
  let ordem = numeros.sort();
  let maior = ordem[numeros.length - 1];
  let retorno = 0;
  for (let i = 0; i < numeros.length; i += 1) {
    if (numeros[i] === maior) {
      retorno += 1;
    }
  }
  return retorno;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let distancia1 = Math.abs(mouse - cat1);
  let distancia2 = Math.abs(mouse - cat2);
  let retorno = '';
  if (distancia1 < distancia2) {
    retorno = 'cat1';
  } else if (distancia2 < distancia1) {
    retorno = 'cat2';
  } else {
    retorno = 'os gatos trombam e o rato foge';
  }
  return retorno;
}

// Desafio 8
let retorno = [];
function retornoPush(numero, index) {
  if (numero % 3 === 0 && numero % 5 === 0) {
    retorno[index] = 'fizzBuzz';
  } else if (numero % 3 === 0) {
    retorno[index] = 'fizz';
  } else if (numero % 5 === 0) {
    retorno[index] = 'buzz';
  } else {
    retorno[index] = 'bug!';
  }
}

function fizzBuzz(numeros) {
  // seu código aqui
  retorno = numeros;
  for (let index = 0; index < numeros.length; index += 1) {
    retornoPush(numeros[index], index);
  }
  return retorno;
}

// Desafio 9
let novaFrase = '';

function iOu(ajuda) {
  if (ajuda === 'i') { novaFrase = novaFrase.replace(ajuda, 3); }
  if (ajuda === 'o') { novaFrase = novaFrase.replace(ajuda, 4); }
  if (ajuda === 'u') { novaFrase = novaFrase.replace(ajuda, 5); }
}

function newFrase(ajuda) {
  if (ajuda === 'a') { novaFrase = novaFrase.replace(ajuda, 1); }
  if (ajuda === 'e') { novaFrase = novaFrase.replace(ajuda, 2); }
  iOu(ajuda);
}

function encode(frase) {
  novaFrase = frase;
  for (let index = 0; index < novaFrase.length; index += 1) {
    let ajuda = novaFrase[index];
    newFrase(ajuda);
  }
  return novaFrase;
}

let novaFrase2 = '';
function iOuNumeros(ajuda) {
  if (ajuda === '3') { novaFrase2 = novaFrase2.replace(ajuda, 'i'); }
  if (ajuda === '4') { novaFrase2 = novaFrase2.replace(ajuda, 'o'); }
  if (ajuda === '5') { novaFrase2 = novaFrase2.replace(ajuda, 'u'); }
}

function newFrase2(ajuda) {
  if (ajuda === '1') { novaFrase2 = novaFrase2.replace(ajuda, 'a'); }
  if (ajuda === '2') { novaFrase2 = novaFrase2.replace(ajuda, 'e'); }
  iOuNumeros(ajuda);
}

function decode(frase) {
  novaFrase2 = frase;
  for (let index = 0; index < novaFrase2.length; index += 1) {
    let ajuda2 = novaFrase2[index];
    newFrase2(ajuda2);
  }
  return novaFrase2;
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
