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
function generatePhoneNumber(numero) {
  // seu código aqui
  let check = true; let retornar = '';
  if (numero.length !== 11) {
    check = false;
    retornar = 'Array com tamanho incorreto.';
  } else {
    for (let i = 0; i < numero.length; i += 1) {
      let contador = numero.split(numero[i]).length - 1;
      if (numero[i] < 0 || numero[i] > 9 || contador >= 3) {
        check = false;
        retornar = 'não é possível gerar um número de telefone com esses valores';
      }
    }
    if (check) {
      let telefone = []; telefone[0] = '('; telefone[1] = numero[0];
      telefone[2] = numero[1]; telefone[3] = ') ';
      telefone[4] = numero[2]; telefone[5] = numero[3];
      telefone[6] = numero[4]; telefone[7] = numero[5];
      telefone[8] = numero[6]; telefone[9] = '-';
      telefone[10] = numero[7]; telefone[11] = numero[8];
      telefone[12] = numero[9]; telefone[13] = numero[10];
      for (let i = 0; i < telefone.length; i += 1) {
        retornar += telefone[i];
      }
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
