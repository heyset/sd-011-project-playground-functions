// Desafio 10
// References
// Sort(): https://www.w3schools.com/jsref/jsref_sort.asp
// Objects: https://www.w3schools.com/js/js_objects.asp
function techList(tech, name) {
  let result = [];
  let list = tech.sort(); // 'list' recieve 'tech sorted', I don't know if this works yet

  if (list.length !== 0) { // if list.length diffent from zero, it's ok to continue
    for (let i = 0; i < list.length; i += 1) {
      result.push({ tech: list[i], name }); // just print the object
    }
  } else result = 'Vazio!';

  return result;
}

// Desafio 11
// References:
// Template Literals: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
// Break Lines in TL: https://stackoverflow.com/questions/37321047/wrap-long-template-literal-line-to-multiline-without-creating-a-new-line-in-the
function generatePhoneNumber(phone) {
  let result = '';
  if (phone.length != 11) {
    console.log('Array com tamanho incorreto.');
  } else {
    for (let i = 0; i < phone.length; i += 1) {
      let count = 0;
      if (phone[i] < 0 || phone[i] > 9) {
        console.log('não é possível gerar um número de telefone com esses valores1');
      }
      for (let j of phone) if (phone[j] === phone[i]) {
        count += 1;
        if (count > 2) {
          console.log('não é possível gerar um número de telefone com esses valores2');
        }
      }
    }
    result = `(${phone[0]}${phone[1]}) ${phone[2]}${phone[3]}${phone[4]}${phone[5]}`
    + `${phone[6]}-${phone[7]}${phone[8]}${phone[9]}${phone[10]}`;
}
  return result;
}

console.log(generatePhoneNumber([1, 1, 1, 1, 5, 6, 7, 8, 9, 0, 1]));

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
