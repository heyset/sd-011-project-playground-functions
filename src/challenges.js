// Desafio 1
function compareTrue(bool1, bool2) {
  if (bool1 === true && bool2 === true) {
    return true;
  } else {
    return false;
  }
}
console.log(compareTrue(true, false));

// Desafio 2
function calcArea(base,height) {
  return (base * height)/2
}
console.log(calcArea(5, 10));

// Desafio 3
//https://www.w3schools.com/jsref/jsref_split.asp//
function splitSentence(sentence) {
return sentence.split(" ");
}
console.log(splitSentence('Vivian Maria Braga'));

// Desafio 4
function concatName(names) {
  return (names[names.length-1] + ', ' +names[0]);
}
console.log(concatName(['Vivian', 'Maria', 'Braga']));

// Desafio 5
function footballPoints(wins, ties) {
  return wins*3 + ties;
}
console.log(footballPoints(14,8));

// Desafio 6
function highestCount(numbers) {
  if (numbers[0] > numbers[1]) {
    let highest =  numbers[0];
    for (index = 2; index < numbers.length; index += 1) {
      if (numbers[index] > highest) {
        return numbers[index];
  } else {
    let highest =  numbers[1];
    for (index = 2; index < numbers.length; index += 1) {
      if (numbers[index] > highest) {
       return numbers[index];
  }
}

console.log(highestCount([2, 1, 3]));







// Desafio 7
function catAndMouse([mouse, cat1, cat2]) {
   if (cat1 - mouse === cat2 - mouse) {
    return 'os gatos se trobam e o rato foge';
   } else if (cat1 - mouse < cat2 - mouse) {
     return 'cat1';
   } else {
     return 'cat2';
   }
}
console.log(catAndMouse([1, 4, 3]));

// Desafio 8
function fizzBuzz(numbers) {
 for (index = 0; index < numbers.length; index += 1) {
   if (numbers[index] % 3 === 0 || numbers[index] % 5) {

   }
 } 
}

[2, 15, 7, 9, 45]














// Desafio 9
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/joinfunction encode() {
  function encode(sentence) {
    var assembSentence = [];
    for (index = 0; index<sentence.length; index +=1) {
      if (sentence[index] === 'a') {
        assembSentence.push('1');
      } else if (sentence[index] === 'e') {
        assembSentence.push('2');
        } else if (sentence[index] === 'i') {
          assembSentence.push('3');
          } else if (sentence[index] === 'o') {
            assembSentence.push('4');
            } else if (sentence[index] === 'u') {
              assembSentence.push('5');
              } else {
                assembSentence.push(sentence[index]);
                }
      } 
      return assembSentence.join('');
  }
  console.log(encode('hoje vai chover'));


function decode(sentence) {
  var originalSentence = [];
  for (index = 0; index<sentence.length; index +=1) {
    if (sentence[index] === '1') {
      originalSentence.push('a');
    } else if (sentence[index] === '2') {
      originalSentence.push('e');
      } else if (sentence[index] === '3') {
        originalSentence.push('i');
        } else if (sentence[index] === '4') {
          originalSentence.push('o');
          } else if (sentence[index] === '5') {
            originalSentence.push('u');
            } else {
              originalSentence.push(sentence[index]);
              }
    } 
    return originalSentence.join('');
}
console.log(decode('h4j2 v13 ch4v2r'));

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
