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
//me baseia na ideia do uso das funções split e map do colega vitorguima turma 11; 
function hydrate(drinksOrder) {
  let drinksArray = drinksOrder.split(' ').map(Number);
  let waterGlass = 0;
  for(let index = 0; index = drinksArray.length; index += 1){
    if(drinksArray[index] > 0){
      waterGlass += drinksArray[index];
    }
  }
  if(waterGlass > 1){
    return `${waterGlass} copos de água`;
  }
  return `${waterGlass} copo de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
