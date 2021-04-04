// Desafio 10
function techList(lista, nameName) {
  let list = [];
  lista.sort();
  for (let index = 0; index < lista.length; index += 1) {
    let object = {
      tech: lista[index],
      name: nameName,    
    };
  list.push(object);
  }

  if (lista.length === 0) {
    return 'Vazio!';
    
  }

  return list;
  ///https://pt.stackoverflow.com/questions/46600/como-ordenar-uma-array-de-objetos-com-array-sort
}

// Desafio 11
function generatePhoneNumber(numbers) {
  let cont = 0;
  if (numbers.length !== 11) {
    return 'Array com tamanho incorreto.';

  }

  for (index of numbers) {
   if (numbers[index] < 0 || numbers[index] > 9) {
     return 'não é possível gerar um número de telefone com esses valores.';
   }
  }

  for (let index2 of numbers) {
    for (let index3 = 1; index3 < numbers.length; index += 1) {
      if (index2 === numbers[index3]) {
        cont += 1;
      }
      break;
    }
  }
  
  if (cont < 3) {
    numbers.splice(0, 0, '(');
    numbers.splice(3, 0, ')');
    numbers.splice(9, 0, '-');
    return numbers.join('');
  }

  return 'não é possível gerar um número de telefone com esses valores.';
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
