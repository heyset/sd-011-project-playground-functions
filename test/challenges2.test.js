const { generatePhoneNumber, techList } = require('../src/challenges2');

it('Retorne um número de telefone, respeitando parênteses, traços e espaços', () => {
  expect(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1])).toEqual('(12) 34567-8901');
  expect(generatePhoneNumber([5, 2, 8, 1, 5, 3, 7, 2, 8, 9, 0])).toEqual('(52) 81537-2890');
  expect(generatePhoneNumber([0, 2, 4, 3, 5, 5, 6, 8, 9, 2, 1])).toEqual('(02) 43556-8921');
  expect(generatePhoneNumber([0, 2, 3, 4, 5, 8, 7, 9, 1, 0, 7])).toEqual('(02) 34587-9107');
});

describe('Testa a função techList', () => {
  it('Testa se a função techList é definida', () => {
    expect(techList).toBeDefined();
  });
  it('Testa se techList é uma função', () => {
    expect(typeof techList).toBe('function');
  });
  it('Lista com 5 tecnologias deve retornar uma lista de objetos ordenados', () => {
    expect(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas')).toEqual([
      { tech: 'CSS', name: 'Lucas' },
      { tech: 'HTML', name: 'Lucas' },
      { tech: 'JavaScript', name: 'Lucas' },
      { tech: 'Jest', name: 'Lucas' },
      { tech: 'React', name: 'Lucas' },
    ]);
  });
  it('Lista com 0 tecnologias deve retornar uma mensagem de erro "Vazio!"', () => {
    expect(techList([], 'Lucas')).toBe('Vazio!');
  });
});
