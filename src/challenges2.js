// Desafio 10
function techList(arrTec, name) {
  if (arrTec === null || arrTec.length === 0) {
    return 'Vazio!';
  }
  let arrObjectTech = [];
  arrTec.sort();
  for (let i = 0; i < arrTec.length; i += 1) {
    arrObjectTech[i] = {
      tech: arrTec[i],
      name,
    };
  }
  return arrObjectTech;
}

// Desafio 11
function countNumber(value1, numbersArr) {
  let count = 0;
  for (let num of numbersArr) {
    if (value1 === num) {
      count += 1;
    }
    if (count >= 3) {
      return count;
    }
  }
  return count;
}

function isValidArrLength(numbersArr) {
  if (numbersArr.length === 11) {
    return true;
  }
  return false;
}

function isValidPhoneNumber(numbersArr) {
  let isValid = true;
  for (let num of numbersArr) {
    if (num > 9 || num < 0 || countNumber(num, numbersArr) >= 3) {
      return !isValid;
    }
  }
  return isValid;
}

function formatPhoneNumber(numbers) {
  let format = '(xx) xxxxx-xxxx';
  for (let index = 0; index < numbers.length; index += 1) {
    format = format.replace('x', numbers[index]);
  }
  return format;
}

function generatePhoneNumber(phoneNumberArr) {
  if (!isValidArrLength(phoneNumberArr)) {
    return 'Array com tamanho incorreto.';
  }
  if (!isValidPhoneNumber(phoneNumberArr)) {
    return 'não é possível gerar um número de telefone com esses valores';
  }

  return formatPhoneNumber(phoneNumberArr);
  //  número máximo de caracteres numa linha == 100
  //  return `(${phoneNumberArr.slice(0,2).join().replace(/,/g, '')}) ${phoneNumberArr.slice(2,7).join().replace(/,/g, '')}-${phoneNumberArr.slice(7,11).join().replace(/,/g, '')}`;
}

// Desafio 12
function triangleCheck(l1, l2, l3) {
  if (l1 < l2 + l3 && l1 > Math.abs(l2 - l3)) {
    return true;
  }
  return false;
}

// Desafio 13
function hydrate(strDrink) {
  let drinks = strDrink.match(/\d+/g).join('');
  let water = 0;
  for (let index = 0; index < drinks.length; index += 1) {
    water += parseInt(drinks.charAt(index), 10);
  }
  if (water <= 1) {
    return `${water} copo de água`;
  }
  return `${water} copos de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
