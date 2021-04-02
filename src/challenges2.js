// Desafio 10
function techList(technology, name) {
  let orderedListObjects = [];
  let ordered = technology.sort();
  if (Object.keys(ordered).length !== 0 && ordered.constructor !== Object) {
    for (let index in ordered) {
      orderedListObjects[index] = {
        tech: ordered[index],
        name,
      };
    }
  } else {
    return 'Vazio!';
  }
  return orderedListObjects;
}

// Desafio 11
function invalidNumberAnalyzer(arrayNumbers) {
  for (let index in arrayNumbers) {
    if (arrayNumbers[index] < 0 || arrayNumbers[index] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  return false;
}

function repeatedNumberAnalyzer(arrayNumbers) {
  let arrayClone = arrayNumbers;
  for (let index = 0; index < arrayNumbers.length; index += 1) {
    let count = 0;
    for (let secondIndex = 0; secondIndex < arrayClone.length; secondIndex += 1) {
      if (arrayNumbers[index] === arrayClone[secondIndex]) {
        count += 1;
        if (count === 3) {
          return 'não é possível gerar um número de telefone com esses valores';
        }
      }
    }
  }
  return false;
}

function generatePhoneNumber(arrayOfNumbers) {
  let validator = invalidNumberAnalyzer(arrayOfNumbers);
  validator = repeatedNumberAnalyzer(arrayOfNumbers);
  if (validator === false) {
    let newPhoneNumber = ['('];
    for (let index of arrayOfNumbers) {
      if (arrayOfNumbers[index] === 4) {
        newPhoneNumber.push(')');
      } else if (arrayOfNumbers[index] === 9) {
        newPhoneNumber.push('-');
      }
      newPhoneNumber.push(index);
    }
    newPhoneNumber = newPhoneNumber.toString();
    newPhoneNumber = newPhoneNumber.replace(/,/g, '');
    return newPhoneNumber;
  }
  return validator;
}

// Desafio 12
function sum(lineA, lineB, lineC) {
  let sumAB = lineA + lineB;
  let sumAC = lineA + lineC;
  let sumBC = lineB + lineC;
  if (lineA < sumBC && lineB < sumAC && lineC < sumAB) {
    return true;
  }
  return false;
}

function abs(lineA, lineB, lineC) {
  let absAB = Math.abs(lineA - lineB);
  let absAC = Math.abs(lineA - lineC);
  let absBC = Math.abs(lineB - lineC);
  if (lineA > absBC && lineB > absAC && lineC > absAB) {
    return true;
  }
  return false;
}

function triangleCheck(lineA, lineB, lineC) {
  if (sum(lineA, lineB, lineC) && abs(lineA, lineB, lineC)) {
    return true;
  }
  return false;
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
