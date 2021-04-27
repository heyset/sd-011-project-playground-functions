// Desafio 10
function techList(tecnologias, nome) {
  // seu código aqui
  let retorno = [];
  let retornar = 0;
  let ordem = tecnologias.sort();
  if (ordem.length !== 0) {
    for (let i = 0; i < ordem.length; i += 1) {
      retorno[i] = {
        tech: ordem[i],
        name: nome,
      };
    }
    retornar = retorno;
  } else {
    retornar = 'Vazio!';
  }
  return retornar;
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
