// Desafio 1
function compareTrue(value1, value2) {
  if(value1 && value2 === true){
    return true;
  }
    return false;
}

// Desafio 2
function calcArea(base, height) {
  return (height * base)/2;
}

// Desafio 3
function splitSentence(phrase) {
  return phrase.split(' ');
}

// Desafio 4
function concatName(phrase) {
  return `${phrase[phrase.length - 1]}, ${phrase[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties;
}

// Desafio 6
function highestCount(numbers) {
  let sequence = numbers.sort();
  let higher = sequence[numbers.length - 1];
  let regress = 0;
  for(let index in numbers){
    if(numbers[index] === higher){
      regress += 1;
    }
  }
  return regress;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let range1 = Math.abs(mouse - cat1);
  let range2 = Math.abs(mouse - cat2);
  if (range1 < range2){
    return 'cat1';
  } else if(range2 < range1){
    return 'cat2';
  } else{
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
//para a solução desse desafio tive ajuda de Cristiano Roberto turma 09, obrigado;
function fizzBuzz(array) {
    let result = [];
    for (i = 0; i < array.length; i +=1) {
        if (array[i] % 3 == 0 && array[i] % 5 == 0) {
            result.push("fizzBuzz");
        } else if (array[i] % 3 == 0) {
            result.push("fizz");
        } else if (array[i] % 5 == 0) {
            result.push("buzz");
        } else {
            result.push("bug!");
        };
    }
    return result;
}


// Desafio 9
function encode(letter) {
  for(let index = 0; index < letter.length; index += 1){
    letter = letter.replace('a', '1');
    letter = letter.replace('e', '2');
    letter = letter.replace('i', '3');
    letter = letter.replace('o', '4');
    letter = letter.replace('u', '5');
  }
  return letter;
}
function decode(number) {
  for(let index = 0; index < number.length; index += 1){
    number = number.replace('1', 'a');
    number = number.replace('2', 'e');
    number = number.replace('3', 'i');
    number = number.replace('4', 'o');
    number = number.replace('5', 'u');
  }
  return number;
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