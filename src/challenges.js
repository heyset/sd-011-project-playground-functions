// Desafio 1
function compareTrue(value1, value2) {
  
  if (value1 === true && value2 === true) {
    return true;
  } 
    return false;
  
};

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height) /2;

};

// Desafio 3
function splitSentence(string) {
  // seu código aqui
  return string.split(' ');
};

// Desafio 4
function concatName(array) {
  // seu código aqui
  let formattedName = array[array.length - 1] + ', ' + array[0];
  return formattedName;
}; 

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let result = (3 * wins) + ties;
    return result;
};


// Desafio 6
function highestCount(array) {
  // seu código aqui
  let highestArray = [9, 1, 2, 3, 9, 5, 7];
  let higherNumber = 0;
  let repeatNumber = 0;

  for (let index = 0; index < array.length; index += 1){
    let possibleHigherNumber = higherNumber;
    higherNumber = array[index];
    if (higherNumber < possibleHigherNumber) {
      higherNumber = possibleHigherNumber;
          }
  }      
}
  for (let index = 0; index < array.length; index += 1){
  if (higherNumber === array[index]){
    repeatNumber += 1;
      }

return repeatNumber;     
};




// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let distanceCat1 = mouse - cat1;
  let distanceCat2 = mouse - cat2;

  if (Math.abs(distanceCat1) > Math.abs(distanceCat2)) {

    return 'cat2';

  } else if (Math.abs(distanceCat1) < Math.abs(distanceCat2)) {

    return 'cat1';

  } else {

    return 'os gatos trombam e o rato foge';
  }
};

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
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
