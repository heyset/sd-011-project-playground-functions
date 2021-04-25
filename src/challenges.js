// Desafio 1
function compareTrue(value1, value2) {
  // como são testados dois valores booleanos e o operador && ja retorna
  // uma resposta de false ou true apenas retornar os dois ja faz a função
  return value1 && value2;
}

// Desafio 2
function calcArea(width, height) {
  // calculo de um triangulo qualquer que sabemos a altura e largura
  return (width * height) / 2;
}

// Desafio 3
function splitSentence(frase) {
  let final = frase.split(' ');
  return final;
}
console.log(splitSentence('tanto faz cacete'));

// Desafio 4
function concatName(nameArray) {
  let firstName = nameArray[0];
  let lastName = nameArray[nameArray.length - 1];
  let nameString = `${lastName}, ${firstName}`;
  return nameString;
}

function footballPoints(wins, ties) {
  // a função recebera dois numeros basta multiplicar pelo peso depois soma-las
  wins *= 3;
  ties *= 1;
  return wins + ties;
}

// Desafio 6

function highestCount(list) {
  let largest = Math.max(...list);
  let count = 0;
  for (let index = 0; index < list.length; index += 1) {
    if (list[index] === largest) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let cat1Dist = Math.abs(mouse - cat1);
  let cat2Dist = Math.abs(mouse - cat2);
  if (cat1Dist === cat2Dist) {
    return 'os gatos trombam e o rato foge';
  }
  if (cat1Dist < cat2Dist) {
    return 'cat1';
  }
  return 'cat2';
}

// Desafio 8
function fizzBuzzChecker(integer) {
  if (integer % 15 === 0) {
    return 'fizzBuzz';
  }
  if (integer % 3 === 0) {
    return 'fizz';
  }
  if (integer % 5 === 0) {
    return 'buzz';
  }
  return 'bug!';
}
function fizzBuzz(intArray) {
  let fizzBuzzArray = [];
  for (let num of intArray) {
    fizzBuzzArray.push(fizzBuzzChecker(num));
  }
  return fizzBuzzArray;
}

// Desafio 9
let dictionary = {
  a: 1,
  e: 2,
  i: 3,
  o: 4,
  u: 5,
  1: 'a',
  2: 'e',
  3: 'i',
  4: 'o',
  5: 'u',
};

function encode(frase) {
  let encodedSentence = '';
  for (let chara of frase) {
    if (dictionary[chara]) {
      encodedSentence += dictionary[chara];
    } else {
      encodedSentence += chara;
    }
  }
  return encodedSentence;
}

function decode(frase) {
  let decodedSentence = '';
  for (let chara of frase) {
    if (parseInt(chara, 10) < 6 && parseInt(chara, 10) > 0) {
      decodedSentence += dictionary[parseInt(chara, 10)];
    } else {
      decodedSentence += chara;
    }
  }
  return decodedSentence;
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
