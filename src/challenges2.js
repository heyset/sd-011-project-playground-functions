// Desafio 10
function techList(techsToLearn, myName) {
  let sorted = '';
  let techToLearn = [];
  techToLearn = techsToLearn.sort();
  let output = [];
  if (techToLearn.length !== 0) {
    for (let index = 0; index < techsToLearn.length; index += 1) {
      sorted = {
        tech: techsToLearn[index],
        name: myName,
      };
      output.push(sorted);
    }
    return output;
  }
  return 'Vazio!';
}
console.log(techList([], 'Maran'));

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA > lineB + lineC || lineA < Math.abs(lineB - lineC)) {
    return false;
  } if (lineB > lineA + lineC || lineB < Math.abs(lineA - lineC)) {
    return false;
  } if (lineC > lineA + lineB || lineC < Math.abs(lineA - lineB)) {
    return false;
  }
  return true;
}
console.log(triangleCheck(14, 14, 14));

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
