// Desafio 10
function techList(technology, name) {
  let regress = [];
  let sequence = technology.sort();
  if(sequence.length != 0){
    for(let index in sequence){
      regress[index] = {
        tech: sequence[index],
        name: name
      }
    }
    return regress;
  }else{
    return 'Vazio!';
  }
}

// Desafio 11
function generatePhoneNumber(numbers, n) {
  let count = 0;
  for(let index = 0; index < numbers.length; index += 1){
    if(numbers[index] === n){
      count += 1;
    }
  }
  return count;
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
