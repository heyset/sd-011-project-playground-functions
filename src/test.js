const { test, expect } = require('@jest/globals');
const { 
  compareTrue, 
  calcArea, 
  splitSentence, 
  concatName,
  footballPoints,
  highestCount,
  catAndMouse,
  encode,
  decode,
} = require('./challenges');

const {
  techList,
  triangleCheck,
} = require('./challenges2');

test('Requisito 01', () => {
  expect(compareTrue(false, false)).toBe(false);
});

test('Requisito 02', () => {
  expect(calcArea(10, 20)).toEqual(100);
});

test('Requisito 03', () => {
  expect(splitSentence('Vamo que vamo')).toEqual([ 'Vamo', 'que', 'vamo' ]);
});

test('Requisito 04', () => {
  expect(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'])).toEqual('Paolillo, Lucas');
});

test('Requisito 05', () => {
  expect(footballPoints(1, 2)).toBe(5);
});

test('Requisito 06', () => {
  expect(highestCount([0, 0, 0])).toEqual(3);
});

test('Requisito 07', () => {
  expect(catAndMouse(10, 13, 13)).toEqual('os gatos trombam e o rato foge');
});

test('Requisito 08', () => {
  expect(encode('hi there!')).toEqual('h3 th2r2!');
});

test('Requisito 09', () => {
  expect(decode('h3 th2r2!')).toEqual('hi there!');
});

test('Requesito 10', () => {
  expect(techList(['React', 'Javascrit', 'CSS', 'HTML', 'C#'], 'Alexandre')).toEqual([ { tech: 'C#', name: 'Alexandre' },
  { tech: 'CSS', name: 'Alexandre' },
  { tech: 'HTML', name: 'Alexandre' },
  { tech: 'Javascrit', name: 'Alexandre' },
  { tech: 'React', name: 'Alexandre' } ]);
});

test('Requisito 11', () => {
  expect(triangleCheck(10, 10, 10)).toEqual(true);
})
