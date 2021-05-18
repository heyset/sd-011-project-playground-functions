const { test, expect } = require('@jest/globals');
const { 
  compareTrue, 
  calcArea, 
  splitSentence, 
  concatName
  
  







} = require('./challenges');


test('Requisito 01', () => {
  expect(false).toBe(compareTrue(false, false));
});

test('Requisito 02', () => {
  expect(100).toEqual(calcArea(10, 20));
});

test('Requisito 03', () => {
  expect([ 'Vamo', 'que', 'vamo' ]).toEqual(splitSentence('Vamo que vamo'));
});

test('Requisito 04', () => {
  expect('Paolillo, Lucas').toEqual(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));
});
