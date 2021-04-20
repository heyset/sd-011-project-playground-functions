// Desafio 10
function techList(selectedTech, nameOfUser) {
  // seu código aqui
  if (selectedTech.length <= 0) {
    return 'Vazio!';
  }
  let techWithName = [];
  selectedTech = selectedTech.sort();
  for (let tech = 0; tech < selectedTech.length; tech += 1) {
    techWithName.push({
      tech: selectedTech[tech],
      name: nameOfUser,
    });
  }
  return techWithName;
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function testSmaller(lineA, lineB, lineC) {
  // seu código aqui
  if (lineA < lineB + lineC && lineB < lineA + lineC && lineC < lineA + lineB) {
    return true;
  }
  return false;
}
function testBigger(lineA, lineB, lineC) {
  let testLineA = Math.abs(lineB - lineC);
  let testLineB = Math.abs(lineA - lineC);
  let testlineC = Math.abs(lineA - lineB);
  if (lineA > testLineA && lineB > testLineB && lineC > testlineC) {
    return true;
  }
  return false;
}
function triangleCheck(lineA, lineB, lineC) {
  if (testSmaller(lineA, lineB, lineC) && testBigger(lineA, lineB, lineC)){
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
