// Desafio 10
function techList(array, name) {
  let result = [];
  let objects = {};
  let ordenado = array.sort();
  for (let index = 0; index < ordenado.length; index += 1) {
    objects = {
      tech: ordenado[index],
      name,
    };
    result.push(objects);
  }
  if (result.length === 0) {
    result = 'Vazio!';
  }
  return result;
}
console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Alan'));

// Desafio 11
function generatePhoneNumber() {

}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (Math.abs(lineA) > lineB + lineC || Math.abs(lineB) > lineA + lineC || Math.abs(lineC) > lineA + lineB) {
    return false;
  }
  if (Math.abs(lineA) < lineB - lineC || Math.abs(lineB) < lineA - lineC || Math.abs(lineC) < lineA - lineB) {
    return false;
  }
  if (Math.abs(lineA) < lineC - lineB || Math.abs(lineB) < lineC - lineA || Math.abs(lineC) < lineB - lineA) {
    return false;
  } else {
    return true;
  }
}
console.log(triangleCheck(10, 14, 8));

// Desafio 13
function hydrate(string) {
  let water = 0;
  let numbers = string.match(/\d+/g).map(Number);

  for (const index of numbers) {
    water += index;
  }  
    if (water > 1 ) {
      return water + ' copos de água';
    }
    return water + ' copo de água';
  }

console.log(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho'));

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
