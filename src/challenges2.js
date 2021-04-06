// Desafio 10
function techList(arrTech, nameDev) {
  if (arrTech.length === 0) {
    return 'Vazio!';
  }
  let orderArrTech = [];
  let arrObj = [];
  for (let index = 0; index < arrTech.length; index += 1) {
    orderArrTech.push(arrTech.sort()[index]);
  }
  // 2 - percorrer o array orderArrayTech. Para cada indice do orderArrayTech criar um novo objeto com o nome da tech e o nome do dev
  for (let index = 0; index < orderArrTech.length; index += 1) {
    let newObj = {
      tech: orderArrTech[index],
      name: nameDev,
    };
    arrObj.push(newObj);
  }
  // 5 - retornar o array de obejtos
  return arrObj;
}
// TESTA A FUNÇÃO
// let arrTech = ['React', 'Jest', 'HTML', 'CSS', 'JavaScript'];
// let arrTech = [];
// let nameDev = 'Edu';
// console.log(techList(arrTech, nameDev));

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
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
