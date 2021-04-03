// Desafio 10
function techList(array, name) {
  let list = [];

  if (array.length === 0) return 'Vazio!';

  array.sort();

  for (let tech of array) {
    list.push({
      tech,
      name,
    });
  }

  return list;
}

// Desafio 11
function hasNonDigitNumber(phone) {
  for (let num of phone) {
    if (num < 0 || num > 9) return true;
  }

  return false;
}

function countRepeats(phone, num) {
  let sortedPhone = [...phone].sort((a, b) => a - b);

  let count = 1;
  let index = sortedPhone.indexOf(num);

  for (let index2 = index + 1; index2 < sortedPhone.length; index2 += 1) {
    if (sortedPhone[index2] === num) count += 1;
  }

  return count;
}

function hasThreeOrMore(phone) {
  for (let num of phone) {
    let count = countRepeats(phone, num);
    if (count >= 3) return true;
  }

  return false;
}

function validatePhoneNumber(phone) {
  if (phone.length !== 11) return 'Array com tamanho incorreto.';

  if (hasNonDigitNumber(phone) || hasThreeOrMore(phone)) {
    return 'não é possível gerar um número de telefone com esses valores';
  }

  return phone;
}

function generatePhoneNumber(phone) {
  phone = validatePhoneNumber(phone);

  if (typeof phone === 'string') return phone;

  let phoneNumber = `(${phone[0]}${phone[1]}) `;

  for (let index = 2; index < 7; index += 1) phoneNumber += phone[index];

  phoneNumber += '-';

  for (let index = 7; index < 11; index += 1) phoneNumber += phone[index];

  return phoneNumber;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA <= 0 || lineB <= 0 || lineC <= 0) return false;

  let lines = [lineA, lineB, lineC];
  lines.sort(function (a, b) { return a - b; });

  if (lines[0] + lines[1] < lines[2]) return false;

  return true;
}

// Desafio 13
function hydrate(string) {
  string = string.replace(/[^0-9]/g, '');
  string = string.split('');
  let totalCount = 0;
  for (let index = 0; index < string.length; index += 1) {
    totalCount += parseInt(string[index], 10);
  }
  if (totalCount === 1) return '1 copo de água';
  return `${totalCount} copos de água`;
}

console.log(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho'));

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
