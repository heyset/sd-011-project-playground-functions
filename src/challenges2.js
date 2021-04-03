// Desafio 10
// Obrigado ao amigo Vitor Cardoso e Marlon pela ajuda!
// Foi usado como referência para resolução deste desafio um pequeno artigo de ESLint.org
// Source: https://eslint.org/docs/2.0.0/rules/guard-for-in
function techList(techs, names) {
  let skills = [];
  if (techs.length > 0) {
    for (let index in techs.sort()) {
      if ({}.hasOwnProperty.call(techs, index)) {
        skills[index] = {
          tech: techs[index],
          name: names,
        };
      }
    }
  } else return 'Vazio!';
  return skills;
}
// Desafio 11
// Para conclusão deste desafio eu obtive ajuda de algumas pessoas e artigos.
// Meus agradecimentos aos amigos: J. Filizzola, Renato Bispo e Vitor Cardoso.
// ===
// Créditos ao knoonrx/nove_digitos.js | Seu código que mostra como funciona formatação de números através de Expressões Regulares.
// Source: https://gist.github.com/knoonrx/a180f0b7e3039e42c621
// Expressões Regulares | Source: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Regular_Expressions
// Medium / Alexandre Servian | Source: https://medium.com/@alexandreservian/regex-um-guia-pratico-para-express%C3%B5es-regulares-1ac5fa4dd39f
function findRepetition(telNum, num) {
  let repeater = 0;
  for (let count = 0; count < telNum.length; count += 1) {
    if (telNum[count] === num) {
      repeater += 1;
    }
  }
  return repeater;
}

function numVerify(telNum) {
  for (let count = 0; count < telNum.length; count += 1) {
    if (telNum[count] < 0 || telNum[count] > 9 || findRepetition(telNum, count) > 2) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
}

function generatePhoneNumber(genNum) {
  let regex = /(\d{2})(\d{5})(\d{4})/;
  let sNum = '';
  let verify = numVerify(genNum);
  if (genNum.length !== 11) return 'Array com tamanho incorreto.';
  if (verify) {
    return verify;
  }
  for (let count = 0; count < genNum.length; count += 1) {
    sNum += genNum[count];
    sNum = sNum.replace(regex, '($1) $2-$3');
  }
  return sNum;
}
console.log(generatePhoneNumber([1, 1, 2, 3, 4, 5, 6, 7, 9, 9, 8], 9));

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
