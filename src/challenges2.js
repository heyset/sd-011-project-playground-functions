// Desafio 10
function techList(array, name) {
  let test = [];
  if (array.length <= 0) {
    return 'Vazio!';
  }
  for (let index = 0; index < array.length; index += 1) {
    test.push = ({
      tech: array[index],
      pessoa: name,
    }
    );
  }
  return test;
}

// Desafio 11
function numeroZeroNove(array) {
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] < 0 || array[index] > 9) {
      return false;
    }
  }
  return true;
}
function repeticaoNumero(array) {
  let contador = 0;
  for (let index = 0; index < array.length; index += 1) {
    for (let indexCont = 0; indexCont < array.length; indexCont += 1) {
      if (array[indexCont] === array[index]) {
        contador += 1;
      }
    }
    if (contador >= 3) {
      return false;
    }contador = 0;
  }
  return true;
}

function generatePhoneNumber(array) {
  if (array.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  if (array.length === 11) {
    let primeiroNUmero = ('(' + array[0] + array[1]);
    let numeroMeio = (') ' + array[2] + array[3] + array[4] + array[5] + array[6]);
    let ultimoNumero = (' - ' + array[7] + array[8] + array[9] + array[10]);
    return (primeiroNUmero + numeroMeio + ultimoNumero);
  }
  if (!numeroZeroNove(array) || repeticaoNumero(array)) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  return generatePhoneNumber(array);
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let triaA = lineA < lineB + lineC && lineA > Math.abs(lineB - lineC);
  let triaB = lineB < lineA + lineC && lineB > Math.abs(lineA - lineC);

  return (triaA || triaB);
}

// Desafio 13
function hydrate(string) {
  let numeroCopos = string.match(/\d+/g).map(Number);
  let somaCopos = 0;
  for (let index = 0; index < numeroCopos.length; index += 1) {
    somaCopos += numeroCopos[index];
  }
  if (somaCopos > 1) {
    return (`${somaCopos} copos de água`);
  } if (somaCopos >= 0 || somaCopos < 1) {
    return (`${somaCopos} copo de água`);
  }
  return hydrate;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
