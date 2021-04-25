// Desafio 10
function techList(array, nome) {
  // Criação de variáveis para armazenar info
  let newArr = [];
  let objNew = {};
  // Checar se o array tem conteudo
  if (array.length === 0) {
    return 'Vazio!';
  }
  // Colocar em ordem alfabetica
  array = array.sort();
  // Criação do conteudo do objNew
  for (let i = 0; i < array.length; i += 1) {
    objNew = {
      tech: array[i],
      name: nome,
    };
    newArr.push(objNew);
  }
  return newArr;
}
console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Thyago'));
console.log(techList(['Python'], 'Thyago'));
console.log(techList([], 'Thyago'));

// Desafio 11

function checkRepeat(array) {
  let newArr = [...array].sort();
  let counter = 0;
  for (let index = 0; index < newArr.length; index += 1) {
    if (newArr[index] === newArr[index + 1] && newArr[index] === newArr[index + 2]) {
      counter += 1;
    }
    return counter;
  }
  if (array.length > 11) {
    return 'Array com tamanho incorreto.';
  }
}

function generatePhoneNumber(array) {
  for (let numero = 0; numero < array.length; numero += 1) {
    if (array[numero] < 0 || array[numero] > 9 || checkRepeat(array) >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }

  let validNumber = '(xx) xxxxx-xxxx';
  array.forEach((index) => {
    validNumber = validNumber.replace('x', index);
  });
  return validNumber;
}
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let lineAComp = Math.abs(lineA);
  let lineBComp = Math.abs(lineB);
  let lineCComp = Math.abs(lineC);
  if (lineAComp > lineBComp + lineCComp) {
    return false;
  }
  if (lineBComp > lineAComp + lineCComp) {
    return false;
  }
  if (lineCComp > lineBComp + lineAComp) {
    return false;
  }
  return true;
}
console.log(triangleCheck(10, 14, 8));
console.log(triangleCheck(10, 1, 8));

// Desafio 13
function hydrate(string) {
  let amount = string.match(/\d+/g);
  let result = 0;
  for (let i = 0; i < amount.length; i += 1) {
    result += parseInt(amount[i], 10);
  }
  if (result === 1) {
    return `${result} copo de água`;
  }
  return `${result} copos de água`;
}
console.log(hydrate('1 cerveja'));
console.log(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho'));

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
