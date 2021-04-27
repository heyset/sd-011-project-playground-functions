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
let retornar = '';
let check = true;
let contador = 0;
let numero = [];
function calulaContador(i, tamanho2) {
  for (let j = 0; j < tamanho2; j += 1) {
    if (numero[i] === numero[j]) {
      contador += 1;
    }
  }
}

function avaliaNumero(tamanho) {
  for (let i = 0; i < tamanho; i += 1) {
    calulaContador(i, tamanho);
    if (numero[i] < 0 || numero[i] > 9 || contador >= 3) {
      check = false;
      retornar = 'não é possível gerar um número de telefone com esses valores';
    }
    contador = 0;
  }
}

function generatePhoneNumber(array) {
  retornar = ''; check = true; contador = 0; numero = array;
  if (numero.length !== 11) {
    check = false;
    retornar = 'Array com tamanho incorreto.';
  }
  if (check) {
    avaliaNumero(numero.length);
  }
  if (check) {
    let telefone = ['(', numero[0], numero[1], ') ', numero[2], numero[3], numero[4], numero[5],
      numero[6], '-', numero[7], numero[8], numero[9], numero[10]];
    for (let i = 0; i < telefone.length; i += 1) {
      retornar += telefone[i];
    }
  }
  return retornar;
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
