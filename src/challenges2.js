// Desafio 10
function techList(tech, name) {
  // seu código aqui
  tech.sort();
  let teste = {
    techs: tech[0],
    nome: name
  }
  let returnArray = [];
  if (tech.length === 0) {
    return 'Vazio!'
  } else {
    for (let index = 0; index < tech.length; index += 1){
      returnArray.push(teste = {
        techs: tech[index],
        nome: name
      })
    }
  }
  return returnArray;
}

console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], "Lucas"));

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
