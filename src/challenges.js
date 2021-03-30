// Desafio 1
function compareTrue(firstBool, secondBool) {
  return firstBool && secondBool;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(array) {
  return array[array.length - 1] + ', ' + array[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(array) {
  let maiorNumero;
  let contador = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (index === 0 || array[index] >= maiorNumero) {
      maiorNumero = array[index];
    }
  }
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] === maiorNumero) {
      contador += 1;
    }
  }
  return contador;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let firstDistance, secondDistance;
  if (mouse <= cat1) {
    firstDistance = cat1 - mouse;
  } else {
    firstDistance = mouse - cat1;
  }
  if (mouse <= cat2) {
    secondDistance = cat2 - mouse;
  } else {
    secondDistance = mouse - cat1;
  }
  if (firstDistance < secondDistance) {
    return "cat1";
  } else if (firstDistance > secondDistance) {
    return "cat2";
  } else {
    return "os gatos trombam e o rato foge";
  }
}

// Desafio 8
function fizzBuzz(arrayNumber) {
  let arrayResult = [];
  for(let firstIndex = 0; firstIndex < arrayNumber.length; firstIndex += 1) {
    if (arrayNumber[firstIndex] % 3 === 0 && arrayNumber[firstIndex] % 5 !== 0) {
      arrayResult.push("fizz");
    } else if (arrayNumber[firstIndex] % 3 !== 0 && arrayNumber[firstIndex] % 5 === 0) {
      arrayResult.push("buzz");
    } else if (arrayNumber[firstIndex] % 3 === 0 && arrayNumber[firstIndex] % 5 === 0) {
      arrayResult.push("fizzBuzz");
    } else {
      arrayResult.push("bug!");
    } 
  }
  return arrayResult;
}

// Desafio 9
function encode(string) {
  let array = string.split('');
  for(let index = 0; index < array.length; index += 1) {
    switch (array[index]) {
    case 'a':
      array[index] = '1';
      break;
    case 'e':
      array[index] = '2';
      break;
    case 'i':
      array[index] = '3';
      break;
    case 'o':
      array[index] = '4';
      break;
    case 'u':
      array[index] = '5';
      break;
    }
  }
  return array.join('');
}

function decode(string) {
  let array = string.split('');
  for(let index = 0; index < array.length; index += 1) {
    switch (array[index]) {
    case '1':
      array[index] = 'a';
      break;
    case '2':
      array[index] = 'e';
      break;
    case '3':
      array[index] = 'i';
      break;
    case '4':
      array[index] = 'o';
      break;
    case '5':
      array[index] = 'u';
      break;
    }
  }
  return array.join('');
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
