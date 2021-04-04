// Desafio 10
/*
referencia para o uso do metodo sort > https://flaviocopes.com/how-to-sort-array-of-objects-by-property-javascript/
Referencia sobre o uso do 'ternary operator': https://www.w3schools.com/jsref/jsref_operators.asp
*/
function techList(tech, name) {
  let technologies = [];
  if (tech.length === 0) {
    return ('Vazio!');
  }
  for (let techno of tech) {
    let technology = { tech: '', name: '' };
    technology.tech = techno;
    technology.name = name;
    technologies.push(technology);
  }
  return (technologies.sort((a, b) => ((a.tech > b.tech) ? 1 : -1)));
}

// Desafio 11
function checkRepeatedNumbers(array) {
  let results = [];
  for (let number of array) {
    let counter = 0;
    for (let index = 1; index < array.length; index += 1) {
      if (number === array[index]) {
        counter += 1;
      }
    }
    if (counter >= 3){
      return (false);
    }
  }
  return (true);
}

function checkRange(array) {
  for (let number of array) {
    if (number > 9 || number < 0) {
      return (false);
    }
  }
  return (true);
}



function generatePhoneNumber() {

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
