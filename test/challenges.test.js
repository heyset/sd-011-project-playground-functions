const { encode, decode } = require('../src/challenges.js');

describe('Testing Encode and Decode functions', () => {
  describe('Encode Function Tests', () => {
    it('Encode Function returns "12345" when "aeiou" is passing as parameter',
      () => expect(encode('aeiou')).toEqual('12345'));
    it('Encode Function returns Original String when string doesnt have "aeiou"',
      () => expect(encode('qwrtyplkjhgfdszxcvbnm')).toEqual('qwrtyplkjhgfdszxcvbnm'));
    it('Encode returns the same lenght than original string',
      () => expect(encode('Hello guys, how are you?').length)
        .toEqual('Relou gaiz, rau ari iuu?'.length));
  });
  describe('Decode Function Tests', () => {
    it('Returns "aeiou" when "12345" is passing as parameter',
      () => expect(decode('12345')).toEqual('aeiou'));
    it('Decode Function returns Original String when string doesnt have "12345"',
      () => expect(decode('67890')).toEqual('67890'));
    it('Decode Function returns the same length than original string',
      () => expect(decode('454').length).toEqual(decode('151').length));
  });
});
