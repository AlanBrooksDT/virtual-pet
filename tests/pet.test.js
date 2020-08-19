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

describe('initial age 0', () => {
    test('initial age is 0', () => {
        const pet = new Pet('Fido');
        expect(pet.age).toEqual(0);
    })
});

describe('increase age', () => {
    it('increase the age by 1', () => {
      const pet = new Pet('Fido');
  
      pet.growUp();
  
      expect(pet.age).toEqual(1);
    });
  });
  describe('initial hunger and fitnes', () => {
    test('initial hunger is 0', () => {
        const pet = new Pet('Fido');
        expect(pet.hunger).toEqual(0);
    });
    test('fitness = 10', () => {
        const pet = new Pet('Fido');
        expect(pet.fitness).toEqual(10);
    });
});

describe ('getting older strains', () => {
    test('losing fitness with age', () => {
        const pet = new Pet('Fido');

        pet.growUp();
        expect(pet.fitness).toEqual(7);
    });
});
describe('walking is healthy', () => {
    test('increase fitness with walking', () => {
        const pet = new Pet('Fido');
        pet.growUp(); //fitness 7
        pet.walk(); //fitness >6 = 10
        expect(pet.fitness).toEqual(10);
    })
})