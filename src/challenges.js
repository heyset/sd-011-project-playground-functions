// Desafio 1
function compareTrue(value1,value2) {
  return value1&&value2
}

// Desafio 2
function calcArea(base, height) {
  return  base*height/2
}
// Desafio 3
function splitSentence(str)  {
let value = str.split(' ')
  return value
 }

// Desafio 4 
function concatName(name) {
  let start = name[name.length-1];
  let first = name[0]
  let concatenation = start + ', ' + first

  return concatenation
}


// Desafio 5
function footballPoints(wins, ties) {
  let victories = 3;
  let aTie = 1;
    return victories*wins + aTie*ties  
}

// Desafio 6
function highestCount(numbers) {
  let maior = 0;
  let counter = 0;
  for(let index = 0; index < numbers.length; index += 1 ){
    if(numbers[index] > maior){
      maior = numbers[index]
    }
  }
  for(let repeat = 0; repeat < numbers.length; repeat += 1){
    if(numbers[repeat] === maior){
      counter += 1
    }
  }
  return counter
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1 = Math.abs(mouse - cat1);
  let distanceCat2 = Math.abs(mouse - cat2);
 if(distanceCat1 > distanceCat2) {
   return 'cat2';
   }else if(distanceCat2 > distanceCat1){
     return 'cat1';
   }else if(distanceCat1  === distanceCat2){
     return 'os gatos trombam e o rato foge'
   }
}


// Desafio 8
function fizzBuzz(array) {
  let arr = [];
  for(let index = 0; index < array.length; index += 1 ) { 
    if(array[index] % 3 === 0 && array[index] % 5 != 0){
      arr.push('fizz') 
    } else if(array[index] % 3 != 0 && array[index] % 5 === 0) {
      arr.push('buzz')
    } else if(array[index] % 3 === 0 && array[index] % 5 === 0) {
      arr.push('fizzBuzz')
    } else if(array[index] % 3 != 0 && array[index] % 5 != 0) {
      arr.push('bug!')
    } 
  }
  return arr
}

// Desafio 9
function encode(number) {
  number = number.replace(/a/g, '1').replace(/e/g, '2').replace(/i/g, '3').replace(/o/g, '4');
  number = number.replace(/u/g, '5';) 
  return number
}

function decode(text) {
 text = text.replace(/1/g, 'a').replace(/2/g, 'e').replace(/3/g, 'i').replace(/4/g, 'o').replace(/5/g, 'u')
return text
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
