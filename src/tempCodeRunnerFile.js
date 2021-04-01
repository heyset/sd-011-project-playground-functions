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

let arraydeteste = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1];
console.log(generatePhoneNumber(arraydeteste));