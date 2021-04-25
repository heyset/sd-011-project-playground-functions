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
function lessThanThreeRepsSecond(index, array) {
  let lessThanThree = true;
  let counterOfRep = 0;
  for (let index2 = 1; index2 < array.length; index2 += 1) {
    if (array[index] === array[index2]) {
      counterOfRep += 1;
    }
  }
  if (counterOfRep > 2) {
    lessThanThree = false;
  }
  return lessThanThree;
}
function lessThanThreeReps(array) {
  let lessThanThree = true;
  for (let index = 0; index < array.length; index += 1) {
    lessThanThree = lessThanThreeRepsSecond(index, array);
    if (lessThanThree === false) {
      break;
    }
  }
  return lessThanThree;
}
function betweenZeroNine(array) {
  let zeroAndNine = true;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] < 0 || array[index] > 9) {
      zeroAndNine = false;
    }
  }
  return zeroAndNine;
}
function withElevenNumbers(array) {
  let phoneNumber = ['(', 0, 0, ') ', 0, 0, 0, 0, 0, '-', 0, 0, 0, 0];
  let difOfIndex = 1;
  for (let index = 0; index < array.length; index += 1) {
    if (index === 2 || index === 7) {
      difOfIndex += 1;
      phoneNumber[index + difOfIndex] = array[index];
    } else {
      phoneNumber[index + difOfIndex] = array[index];
    }
  }
  return phoneNumber.join('');
}
function generatePhoneNumber(array) {
  let phoneNumber = [];
  if (array.length !== 11) {
    phoneNumber = 'Array com tamanho incorreto.';
  } else if (betweenZeroNine(array) !== true || lessThanThreeReps(array) !== true) {
    phoneNumber = 'não é possível gerar um número de telefone com esses valores';
  } else {
    phoneNumber = withElevenNumbers(array);
  }
  return phoneNumber;
}

// Desafio 12
function triangleCheck(arestaA, arestaB, arestaC) {
  if (arestaA <= 0 || arestaB <= 0 || arestaC <= 0) {
    return false;
  }
  let sortAresta = [arestaA, arestaB, arestaC];
  sortAresta.sort((a, b) => a - b);
  if (sortAresta[0] + sortAresta[1] < sortAresta[2]) {
    return false;
  }
  return true;
}
/* ainda não havia sido ensinado alguns conceitos no curso que utilizei nesse codigo no caso a referencia foi: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
 para criar uma função closure para o sort assim facilitando o codigo */

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
