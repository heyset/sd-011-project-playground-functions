// Desafio 1
function compareTrue(valor1, valor2) {
  if(valor1 == true && valor2 == true){
    return true;
  }
  else{
    return false;
  }
  
}
console.log(compareTrue(true,true));

// Desafio 2
function calcArea(base, high) {
  let area = 0;
  area = (base*high)/2;
  return area;
}
console.log(calcArea(51,1));

// Desafio 3
function splitSentence(sentence,separator) {
  let arrayOfStrings = sentence.split(separator);
  return arrayOfStrings;
}

let string= "foguete";
let space = " ";
console.log(splitSentence(string,space))

// Desafio 4
function concatName(param) {
  let newArray= [param[0],param[param.length-1]];
  return newArray;
}

let names = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'];
console.log(concatName(names));

// Desafio 5
function footballPoints(wins, ties) {
  let pointsWins=0;
  let pointsTies=0;
  pointsWins=wins*3;  
  pointsTies=ties*1;
  return totalPoints= pointsTies+pointsWins;

}

let numberWins=14;
let numberTies=8;
console.log(footballPoints(numberWins, numberTies));

// Desafio 6
function highestCount(array) {
  let maior =0;
  let contador = 0;
  for (let index=0; index<array.length; index +=1){
    if(array[index]>maior){
      maior = array[index];
    }
    if(maior === array[index]){
      contador = contador +1;
    }
  }
  return contador;
}

let array6 = [9, 1, 2, 3, 9, 5, 7];
console.log(highestCount(array6));
// Desafio 7
function catAndMouse(mouse, cat1,cat2) {
  if(cat1>cat2){
    return "cat1";
  }
  else{
    return "cat2";
  }
}

let positionMouse = 0;
let positionCat1 =3;
let positionCat2 = 2;

console.log(catAndMouse(positionMouse,positionCat1,positionCat2));

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
