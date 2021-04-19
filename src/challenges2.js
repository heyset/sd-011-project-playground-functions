// Desafio 10
function createObject(techs, name) {
  let arrayObject = [];
  techs = techs.sort();

  for (let index of techs) {
    let objectTech = { tech: '', name: '' };

    objectTech.tech = index;
    objectTech.name = name;

    arrayObject.push(objectTech);
  }

  return arrayObject;
}

function techList(techs, name) {
  let arrayObject = [];

  if (techs.length === 0) {
    arrayObject = 'Vazio!';
  } else {
    arrayObject = createObject(techs, name);
  }

  return arrayObject;
}

// Desafio 11
function checkPhoneNumberLenght(phoneNumber) {
  let isValid = false;

  if (phoneNumber.length !== 11) {
    isValid = false;
  } else {
    isValid = true;
  }

  return isValid;
}

function digitsCounter(phoneNumber) {
  let count = 0;

  for (let number of phoneNumber) {
    if (number < 0 || number > 9) {
      count += 1;
    }
  }

  return count;
}

function checkPhoneNumberDigits(phoneNumber) {
  let isValid = false;

  if (digitsCounter(phoneNumber) === 0) {
    isValid = true;
  } else {
    isValid = false;
  }

  return isValid;
}

function countRepetitions(phoneNumber, number) {
  let repetitions = 0;

  for (let index of phoneNumber) {
    if (index === number) {
      repetitions += 1;
    }
  }

  return repetitions;
}

function countMostRepeatedNumber(phoneNumber) {
  let mostRepetitions = 0;

  for (let number of phoneNumber) {
    let repetitions = countRepetitions(phoneNumber, number);

    if (repetitions > mostRepetitions) mostRepetitions = repetitions;
  }

  return mostRepetitions;
}

function checkPhoneNumberRepetitions(phoneNumber) {
  let isValid = false;

  if (countMostRepeatedNumber(phoneNumber) < 3) {
    isValid = true;
  } else {
    isValid = false;
  }

  return isValid;
}

function numberCheck(phoneNumber) {
  let answer = '';

  if (checkPhoneNumberLenght(phoneNumber) === false) {
    answer = 'Array com tamanho incorreto.';
  } else if (checkPhoneNumberDigits(phoneNumber) === false
  || checkPhoneNumberRepetitions(phoneNumber) === false) {
    answer = 'não é possível gerar um número de telefone com esses valores';
  } else {
    answer = 'ok';
  }

  return answer;
}

function generatePhoneNumber(phoneNumber) {
  let answer = '';

  if (numberCheck(phoneNumber) !== 'ok') {
    answer = numberCheck(phoneNumber);
  } else {
    let stringNumber = '';

    for (let number of phoneNumber) {
      stringNumber += number;
    }

    stringNumber = stringNumber.replace(/(\d{2})?(\d{5})?(\d{4})/, '($1) $2-$3');
    answer = stringNumber;
  }

  return answer;
}

// Desafio 12
function checkLineMesure(lA, lB, lC) {
  let isSized = false;

  const sumOtherLines = lB + lC;
  const difOtherLines = Math.abs(lB - lC);

  if (lA < sumOtherLines && lA > difOtherLines) isSized = true;

  return isSized;
}

function triangleCheck(lineA, lineB, lineC) {
  const isLineAValid = checkLineMesure(lineA, lineB, lineC);
  const isLineBValid = checkLineMesure(lineB, lineA, lineC);
  const isLineCValid = checkLineMesure(lineC, lineA, lineB);

  return isLineAValid && isLineBValid && isLineCValid;
}

console.log(triangleCheck(10, 14, 8));

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
