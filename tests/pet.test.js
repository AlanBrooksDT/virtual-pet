const Pet = require('../src/pet');

describe('constructor', () => {
    test('returns an object', () => {
      expect(new Pet('Fido')).toBeInstanceOf(Object);
    });
  });

describe('new pet', () => {
    test('creates new pet instance with name', () => {
        const pet = new Pet('Fido');
        expect(pet.name).toEqual('Fido');
    })
});
