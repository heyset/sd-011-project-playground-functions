// Desafio 10
function techList(techNamesArray, studentName) {
  if (techNamesArray.length === 0) return 'Vazio!';

  let techListArray = [];
  let sortedTechNames = techNamesArray.sort();

  for (let techName of sortedTechNames) {
    techListArray.push({
      tech: techName,
      name: studentName,
    });
  }

  return techListArray;
}

// Desafio 11
function generatePhoneNumber() {
  let mirror = '(xx) xxxxx-xxxx';
  array.forEach(function (numero) {
      mirror = mirror.replace('x', numero);
  });
  for(let index = 0; index < array.length; index ++) {
  if(array.length === 11) {
    return mirror;
  } else if (array[index] < 0 || array[index] > 9 || array < 0) {
    return 'Não é possível gerar um numero de telefone com esses valores'
  } else {
  }
  if(array.length !== 11) {
    return 'Array com tamanho incorreto'
  }
  return arrayNotPossible;
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
