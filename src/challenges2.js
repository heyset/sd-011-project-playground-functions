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
