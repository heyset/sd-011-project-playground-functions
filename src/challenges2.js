// Desafio 10
function techList() {
  // seu código aqui
}

// Desafio 11
function generatePhoneNumber(array) {
  if (array.length > 11) {
    return 'Array com tamanho incorreto.';
  }
  
  for (let index2 of array) {
    if (index2 < 0 || index2 > 9) {
      return 'não é possível gerar um número de telefone com esses valores.'
    } 
  }

  function createPhoneNumber(array) {
  array.splice(0,0,'(');
  array.splice(3, 0, ')');
  array.splice(9, 0, '-');
  array.join('');
}
  return array; 
}
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA > lineB + lineC && lineA < Math.abs(lineB - lineC)) {
    return false;
  } return true;
}

// Desafio 13
function hydrate(string) {
  let parameter = /\d+/g;
  let list = string.match(parameter).map(Number);
  let soma = 0;
  for (let index of list) {
    soma += index;
  }
  return soma;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
