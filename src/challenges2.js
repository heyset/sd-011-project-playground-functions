// Desafio 10
function techList(techArray, name) {
  techArray.sort();
  let technologyList = [];
  if (techArray.length === 0) {
    return 'Vazio!';
  }
  for (let index = 0; index < techArray.length; index += 1) {
    technologyList.push({
      tech: techArray[index],
      name,
    });
  }
  return technologyList;
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
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
