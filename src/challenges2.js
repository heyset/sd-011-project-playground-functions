// Desafio 10
function techList(arrTech, nameDev) {
  if (arrTech.length === 0) {
    return 'Vazio!';
  }
  let orderArrTech = [];
  let arrObj = [];
  for (let index = 0; index < arrTech.length; index += 1) {
    orderArrTech.push(arrTech.sort()[index]);
  }
  // 2 - percorrer o array orderArrayTech. Para cada indice do orderArrayTech criar um novo objeto com o nome da tech e o nome do dev
  for (let index = 0; index < orderArrTech.length; index += 1) {
    let newObj = {
      tech: orderArrTech[index],
      name: nameDev,
    };
    arrObj.push(newObj);
  }
  // 5 - retornar o array de obejtos
  return arrObj;
}

// Desafio 11
function formatDdd(arrPhone) {
  // pegar os dois primeiros numeros e colocar dentro de parêntesis
  let ddd = '(';
  for (let index = 0; index < 2; index += 1) {
    ddd += arrPhone[index];
  }
  ddd += ') ';
  return ddd;
}

function formatPhoneNumber(arrPhone) {
  // Devo juntar os 5 numeros após o ddd
  let numPart1 = '';
  let separator = '-';
  let numPart2 = '';
  for (let index = 2; index < 7; index += 1) {
    numPart1 += arrPhone[index];
  }
  // Devo juntar os 4 ultimos numeros numeros
  for (let index = 7; index < arrPhone.length; index += 1) {
    numPart2 += arrPhone[index];
  }
  // Devo colocar um separador entre os conjuntos de numeros
  let numberPhone = numPart1 + separator + numPart2;
  return numberPhone;
}

function checkItensPhoneNum(arrPhone) {
  let validation = true;
  for (let index = 0; index < arrPhone.length; index += 1) {
    if (arrPhone[index] < 0) {
      validation = false;
    }
    if (arrPhone[index] > 9) {
      validation = false;
    }
  }
  return validation;
}

function checkRepeatPhoneNum(arrPhone) {
  let validation = true;
  for (let index = 0; index < arrPhone.length; index += 1) {
    let contNum = arrPhone[index];
    let contNumRepeat = 0;
    for (let index2 = 0; index2 < arrPhone.length; index2 += 1) {
      let contNum2 = arrPhone[index2];
      if (contNum === contNum2) {
        contNumRepeat += 1;
      }
      if (contNumRepeat >= 3) {
        validation = false;
      }
    }
  }
  return validation;
}

function generatePhoneNumber(arrPhone) {
  // seu código aqui
  // Devo retornar uma variável contendo uma string do numero de telefone devidamente formatado
  if (arrPhone.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  if (checkRepeatPhoneNum(arrPhone) && checkItensPhoneNum(arrPhone)) {
    return formatDdd(arrPhone) + formatPhoneNumber(arrPhone);
  }
  return 'não é possível gerar um número de telefone com esses valores';
}

let arrPhoneO = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2];
console.log(generatePhoneNumber(arrPhoneO));

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
