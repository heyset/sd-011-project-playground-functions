// Desafio 10
function techList(techName, name) {
  let infoTech = { tech: '', name: '' };
  const object = [];

  if (techName.length !== 0) {
    for (let index = 0; index < techName.length; index += 1) {
      infoTech = { tech: techName[index], name };
      object.push(infoTech);
    }
  } else {
    return 'Vazio!';
  }

  return object.sort((a, b) => (a.tech > b.tech ? 1 : -1));
}

console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], 'Lucas'));

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
