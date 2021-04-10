function highestCount(array) {
  let maiorNumero = array[0];
  for (let index = 1; index < array.length; index += 1) {
    if (array[index] > maiorNumero) {
      maiorNumero = array[index];
    }
  }
  let contador = 0;
  for (let indexCont = 0; indexCont < array.length; indexCont += 1) {
    if (array[indexCont] === maiorNumero) {
      contador += 1;
    }
  }
  return contador;
}
function arraytest(test) {
  if (test) {
    let resultado = console.log(highestCount(test));
  }
  return arraytest;
}
let arr = [1, 2, 1];
console.log(highestCount(arr));