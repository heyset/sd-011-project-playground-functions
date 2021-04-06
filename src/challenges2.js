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
function generatePhoneNumber(phoneNumber) {
  let answer = '';
  let stringNumber = '';

  if (checkPhoneNumberLenght(phoneNumber) === false) {
    answer = 'Array com tamanho incorreto';
  } else if (checkPhoneNumberDigits(phoneNumber) === false || checkPhoneNumberRepetitions(phoneNumber) === false) {
    answer = 'Não é possível gerar um número de telefone com esses valores.'
  } else if (checkPhoneNumberLenght(phoneNumber) === true && checkPhoneNumberDigits(phoneNumber) === true && checkPhoneNumberRepetitions(phoneNumber) === true) {
    for (let number of phoneNumber) {
      stringNumber += number;
    }

    stringNumber = stringNumber.replace(/(\d{2})?(\d{5})?(\d{4})/, '($1) $2-$3');
    answer = stringNumber;
  }
 
  return answer;
}

function checkPhoneNumberLenght(phoneNumber) {
  let isValid = false;

  if (phoneNumber.length !== 11) {
    isValid = false;
  } else {
    isValid = true;
  }

  return isValid;
}

function checkPhoneNumberDigits(phoneNumber) {
  let isValid = false;
  let count = 0;

  for (let number of phoneNumber) {
    if (number < 0 || number > 9) {
      count += 1;
    }
  }

  if (count === 0) {
    isValid = true;
  } else {
    isValid = false;
  }

  return isValid;
}

function checkPhoneNumberRepetitions(phoneNumber) {
  let isValid = false;
  let repetitions = 0;
  let mostRepetitions = 0;

  for (let number of phoneNumber) {
    repetitions = 0;
    
    for (let index of phoneNumber) {
      if (index === number) {
        repetitions += 1;
      }
    }

    if (repetitions > mostRepetitions) mostRepetitions = repetitions;
  }

  if (mostRepetitions < 3) {
    isValid = true;
  } else {
    isValid = false;
  }

  return isValid;
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
