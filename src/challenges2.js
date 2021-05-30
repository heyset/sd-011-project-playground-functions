function techList(listTech, name) {
  if (listTech.length === 0) {
    return 'Vazio!';
  }
  return listTech.map((tech) => ({ tech, name }));
}
console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas'));
// Desafio 11

const reapitingNumber = (arrayNumbers) => {
  for (let index = 0; index < arrayNumbers.length; index += 1) {
    let number = arrayNumbers[index];
    let acumulador = 0;
    if (number < 0 || number > 9) return true;
    for (let index2 = 0; index2 < arrayNumbers.length; index2 += 1) {
      let number2 = arrayNumbers[index2];
      if (number === number2) {
        acumulador += 1;
        if (acumulador >= 3) {
          return true;
        }
      }
    }
  }
  return false;
};
// console.log(reapitingNumber([5, 2, 1, 2, 4, 3, 8, 8, 9, 0, 7]));

function generatePhoneNumber(arrayNumbers) {
  if (arrayNumbers.length !== 11) return 'Array com tamanho incorreto.';
  if (reapitingNumber(arrayNumbers) !== false) return 'não é possível de telefone com esses valores';
  return arrayNumbers.reduce((acc, number) => {
    if (acc.length === 3) acc += ') ';
    if (acc.length === 10) acc += '-';
    acc += number;
    // acc = String(acc);
    return acc;
  }, '(');
}
console.log((generatePhoneNumber([1, 2, 0, 2, 5, 6, 7, 8, 9, 0, 1])));
// const teste = generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 8]);
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
