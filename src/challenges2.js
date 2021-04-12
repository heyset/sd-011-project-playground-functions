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
function generatePhoneNumber() {

}

// Desafio 12
function triangleCheck() {
  
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
