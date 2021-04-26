// Desafio 10
function techList(array, name) {
  array.sort();
  let secondArray = [];
  for (let index = 0; index < array.length; index += 1) {
    let objects = {
      tech: array[index],
      name,
    };
    secondArray.push(objects);
  }
  if (array[0] === undefined) {
    return 'Vazio!';
  }
  return secondArray;
}

// Desafio 11
function generatePhoneNumber(array) {
  let telefone = '(';
  function valorInvalido() {
    for (let index = 0; index < array.length; index += 1) {
      if (array[index] < 0 || array[index] > 9) {
        return true;
      }
    }
  }
  function maisDeTres() {
    let contador = 0;
    for (let index = 0; index < array.length; index += 1) {
      contador = 0;
      for (let secondIndex = 0; secondIndex < array.length; secondIndex += 1) {
        if (array[index] === array[secondIndex]) {
          contador += 1;
        }
      }
      if (contador >= 3) {
        return true;
      }
    }
  }
  if (array.length !== 11) {
    return 'Array com tamanho incorreto.';
  } if (valorInvalido() === true || maisDeTres() === true) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  for (let index = 0; index < array.length; index += 1) {
    telefone += array[index];
    if (index === 1) {
      telefone += ') ';
    } else if (index === 6) {
      telefone += '-';
    }
  }
  return telefone;
}

console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 8, 7]));

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  function menorQueSoma() {
    if (lineA < lineB + lineC && lineB < lineC + lineA && lineC < lineB + lineA) {
      return true;
    }
    return false;
  }
  function maiorQueAbsoluto() {
    if (lineA > Math.abs(lineB - lineC)) {
      return true;
    }
    return false;
  }
  return menorQueSoma() && maiorQueAbsoluto();
}

console.log(triangleCheck(10, 6, 3));

// Desafio 13
function hydrate(string) {
  let quantidade = string.replace(/\D/g, '');
  let copos = 0;
  if (quantidade.length > 1) {
    for (let index = 0; index < quantidade.length; index += 1) {
      copos += parseInt(quantidade[index], 10);
    }
  } else {
    copos = parseInt(quantidade, 10);
  }
  if (copos === 1) {
    return `${copos} copo de água`;
  }
  return `${copos} copos de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
