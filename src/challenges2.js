// Desafio 10
function techList(techNamesArray, studentName) {
  if (techNamesArray.length === 0) {
    return 'Vazio!';
  }

  let techListArray = [];
  let sortedTechNamesArray = techNamesArray.sort();

  for (let techName of sortedTechNamesArray) {
    techListArray.push({
      tech: techName,
      name: studentName,
    });
  }

  return techListArray;
}

console.log(techList([]));
console.log(techList(['Redux', 'C#', 'C++', 'Unity', 'Unreal Engine 5']));

// Desafio 11

function hasNonDigitNumber(numArray) {
  let hasNonDigit = false;

  for (let num of numArray) {
    if (num < 0 || num > 9) {
      hasNonDigit = true;
      break;
    }
  }

  return hasNonDigit;
}

function countRepeats(numArray, num) {
  let sortedArray = [...numArray].sort((a, b) => a - b);

  let count = 1;
  let index = sortedArray.indexOf(num);

  for (let i = index + 1; i < sortedArray.length; i += 1) {
    if (sortedArray[i] === num) {
      count += 1;
    }
  }

  return count;
}

function hasThriceOrMoreRepeatingValue(numArray) {
  let repeats = false;

  for (let num of numArray) {
    let count = countRepeats(numArray, num);

    if (count >= 3) {
      repeats = true;
      break;
    }
  }

  return repeats;
}

function validatePhoneNumber(numArray) {
  if (numArray.length !== 11) {
    return 'Array com tamanho incorreto.';
  }

  if (hasNonDigitNumber(numArray) || hasThriceOrMoreRepeatingValue(numArray)) {
    return 'não é possível gerar um número de telefone com esses valores';
  }

  return numArray;
}

function generatePhoneNumber(numArray) {
  let validatedArray = validatePhoneNumber(numArray);
  if (typeof validatedArray === 'string') {
    return validatedArray;
  }

  let phoneNumberString = `(${validatedArray[0]}${validatedArray[1]}) `;

  for (let i = 2; i < 7; i += 1) {
    phoneNumberString += validatedArray[i];
  }

  phoneNumberString += '-';

  for (let i = 7; i < 11; i += 1) {
    phoneNumberString += validatedArray[i];
  }

  return phoneNumberString;
}

console.log(generatePhoneNumber([6, 4, 9, 9, 2, 5, 7, 1, 0, 5, 7]));
console.log(generatePhoneNumber([0, 2, 3, 4]));
console.log(generatePhoneNumber([3, 3, 3, 4, 5, 6, 7, 8, 9, 9, 4]));
console.log(generatePhoneNumber([3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3]));
console.log(generatePhoneNumber([6, 4, 10, 9, 2, 5, 7, 1, 0, 5, 7]));
console.log(generatePhoneNumber([6, 4, -4, 9, 2, 5, 7, 1, 0, 5, 7]));

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA <= 0 || lineB <= 0 || lineC <= 0) {
    return false;
  }

  let sortedLines = [lineA, lineB, lineC];
  sortedLines.sort((a, b) => a - b);

  if (sortedLines[0] + sortedLines[1] < sortedLines[2]) {
    return false;
  }

  return true;
}

console.log(triangleCheck(10, 14, 8));
console.log(triangleCheck(10, 4, 14));
console.log(triangleCheck(-4, 8, 10));
console.log(triangleCheck(12, 12, 4));
console.log(triangleCheck(15, 8, 12));
console.log(triangleCheck(20, 4, 10));

/*
  Como este desafio nos propõe a pesquisar, usei alguns conceitos que já conhecia e que ainda não foram apresentados no curso:
    String.match: Usa uma Expressão Regular para encontrar substrings;
      https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/match
      https://regexr.com/
    Array.map: Roda uma função para cada elemento de um array
      https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/map
    Array.reduce: Roda uma função para cada elemento de um array, pegando o retorno da anterior como o primeiro parâmetro para a próxima
      https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
*/
// Desafio 13
function hydrate(orderString) {
  let countArray = orderString.match(/\d+/g);

  countArray = countArray.map((count) => parseInt(count, 10));

  let totalCount = countArray.reduce((accumulator, currentValue) => accumulator + currentValue);

  if (totalCount === 1) {
    return '1 copo de água';
  }

  return `${totalCount} copos de água`;
}

console.log(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho'));

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
