// Desafio 10
function techList(techNames, name) {
  let object = { 
    tech: techNames[0],
    name: name
  }
  
  console.log(object);
  // for in array
  //push no object
}

techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Leonardo');

// Desafio 11
//function generatePhoneNumber(numbers) {
  //let phoneNumber = '(' + numbers.slice(0,2) + ') ' + numbers.slice(2,7) + '-' + numbers.slice(7,11);
  //return phoneNumber.replace(/\,/g, '');
//}

//Caso algum dos números da array seja menor que 0, maior que 9 ou se repita 3 vezes ou mais, generatePhoneNumber deverá retornar a string "não é possível gerar um número de telefone com esses valores".
//function checkNumberConditions(numbers) {
 // if (numbers.length !== 11) {
   // return 'Array com tamanho incorreto.'
  //}

  //for (let index = 0; index < numbers.length; index +=1) {
    //if (numbers[index] < 0 || numbers[index] > 9 || numbers[index]) {
      //return 'não é possível gerar um número de telefone com esses valores'
    //}
  //}

  
//}

//console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1,1]));

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
