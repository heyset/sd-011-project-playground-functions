// Desafio 10
function techList(array, name) {
  let listaObjeto = {
    tech: '',
    name: '',
  };

}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let triCondi = false;
  let checkA = lineA < lineB + lineC;
  let difLineA = Math.abs(lineA - (lineB + lineC));

  if (checkA && difLineA) {
    triCondi = true;
  } 
  else {
    triCondi = false;
  }
  return triCondi;
}
console.log(triangleCheck(10, 14, 8));

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
