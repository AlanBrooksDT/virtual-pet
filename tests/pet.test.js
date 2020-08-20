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
describe('feeding the pet', () => {
    test('reduce hunger through feeding', () => {
        const pet = new Pet('Fido');
        pet.hunger = 5;
        pet.feed();
        expect(pet.hunger).toEqual(2);
    });
    test('hunger cannot be less than 0', () => {
        const pet = new Pet('Fido');
        pet.hunger = 2;
        pet.feed();
        expect(pet.hunger).toEqual(0);
    })
});
describe('checking the pets current needs', () => {
    test('check if hungry', () => {
        const pet = new Pet('Fido');
        pet.hunger = 5;
        expect(pet.checkUp()).toEqual('I am hungry');
    }); 
    test('check if pet needs a walk due to low fitness', () => {
        const pet = new Pet('Fido');
        pet.fitness = 3; 
        expect(pet.checkUp()).toEqual('I need a walk');
    });
    test('check if pet needs a walk and is hungry', () => {
        const pet = new Pet('Fido');
        pet.hunger = 5;
        pet.fitness = 3;
        expect(pet.checkUp()).toEqual('I am hungry AND I need a walk');
    });
    test('check that pet has no current needs', () => {
        const pet = new Pet('Fido');
        pet.hunger = 4;
        pet.fitness = 4;
        expect(pet.checkUp()).toEqual('I am great!');
    });
});