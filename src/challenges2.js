// Desafio 10
function techList(techs, name) {
  if (!techs.length > 0) return 'Vazio!';

  let result = [];

  techs = techs.sort();

  for (let tech of techs) {
    result.push({
      tech,
      name,
    });
  }

  return result;
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
