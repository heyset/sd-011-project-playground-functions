// Desafio 1
function compareTrue(valueA, valueB) {
  if (valueA && valueB === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(phrase) {
  // O método ultilizado abaixo consta na documentação do JavaScript
  // Esse método é usado para separar uma string em um array de acordo com separador, o usado abaixo foi para espaços (" ")
  return phrase.split(' ');
}

// Desafio 4
function concatName(string) {
  let firstName = string[0];
  let lastName = string[string.length - 1];
  return lastName + ', ' + firstName;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(number) {
  let maior = 0;
  let repeat = 0;
  for (let index = 0; index < number.length; index += 1) {
    if (number[index] > maior) {
      maior = number[index];
    }
  }
  for (let index = 0; index < number.length; index += 1) {
    if (maior === number[index]) {
      repeat += 1;
    }
  }
  return repeat;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (mouse < cat1) {
    return 'cat1';
  }
  if (mouse < cat2) {
    return 'cat2';
  }
  if (cat1 === cat2) {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode(vowels) {

  for (let index = 0; index < vowels.length; index++) {
    vowels = vowels.replace('a', 1);
    vowels = vowels.replace('e', 2);
    vowels = vowels.replace('i', 3);
    vowels = vowels.replace('o', 4);
    vowels = vowels.replace('u', 5);
  }
  return vowels;
}

function decode(vowels) {
  
  for (let index = 0; index < vowels.length; index++) {
    vowels = vowels.replace(1, 'a');
    vowels = vowels.replace(2, 'e');
    vowels = vowels.replace(3, 'i');
    vowels = vowels.replace(4, 'o');
    vowels = vowels.replace(5, 'u');
  }
  return vowels;
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
