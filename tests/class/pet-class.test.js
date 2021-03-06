const Pet = require('../../src/class/pet-class');

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
    test('increase the age by 1', () => {
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
    test('getting hungry with age', () => {
        const pet = new Pet('Fido');
        pet.growUp();
        expect(pet.hunger).toEqual(5);
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
describe('checks that will see if the pet is dead or alive', () => {
    test('fitness below 0 results in death', () => {
        const pet = new Pet('FIdo');
        pet.fitness = -1;
        expect(pet.isAlive).toEqual(false);
    })
   test('hunger above 10 results in death', () => {
        const pet = new Pet('FIdo');
        pet.hunger = 11;
        expect(pet.isAlive).toEqual(false);
    })
    test('age greater than or equal to 30 results in death', () => {
        const pet = new Pet('FIdo');
        pet.age = 30;
        expect(pet.isAlive).toEqual(false);
    })
})
describe('you cannot interact with that which is dead', () => {
    test('throws an error if pet is dead from old age', () => {
        const pet = new Pet('Fido');
        pet.age = 30;
        expect(() => pet.growUp()).toThrow('Your pet is no longer alive :(');
    });
    test('throws an error if pet is dead from hunger', () => {
        const pet = new Pet('Fido');
        pet.hunger = 10;
        expect(() => pet.feed()).toThrow('Your pet is no longer alive :(');
    });
    test('throws an error if pet is dead from lack of fitness', () => {
        const pet = new Pet('Fido');
        pet.fitness = 0;
        expect(() => pet.walk()).toThrow('Your pet is no longer alive :(');
    });
    test('throws an error if pet is dead when checking status', () => {
        const pet = new Pet('Fido');
        pet.fitness = 0;
        expect(() => pet.checkUp()).toThrow('Your pet is no longer alive :(');
    });
});
describe('have a baby', () => {
    test('check if parent has a child', () => {
      const pet = new Pet('Fido');
      pet.haveBaby('Cookie');
      expect(pet.children[0]).toHaveProperty('name', 'Cookie')
    });
    test('check if parent has multiple children', () => {
      const pet = new Pet('Fido');
      pet.haveBaby('Cookie');
      pet.haveBaby('Crumble');
      expect(pet.children[0]).toHaveProperty('name', 'Cookie')
      expect(pet.children[1]).toHaveProperty('name', 'Crumble')
      });
    test('double-check if children are stored as array', () => {
      const pet = new Pet('Fido');
      pet.haveBaby('Cookie');
      pet.haveBaby('Crumble');
      expect(pet.children).toBeInstanceOf(Array);
    });
describe('adopt a child', () => {
    test('check if parent has a child', () => {
        const parent = new Pet('Fido');
        const child = new Pet('Cookie');
        parent.adoptChild(child);
        expect(parent.children[0]).toEqual(child)
      });
    test('check if parent has multiple children', () => {
        const parent = new Pet('Fido');
        const child = new Pet('Cookie');
        const child2 = new Pet('Crumble');
        parent.adoptChild(child);
        parent.adoptChild(child2);
        expect(parent.children[0]).toEqual(child);
        expect(parent.children[1]).toEqual(child2);
      });
    test('double-check if children are stored as array', () => {
        const parent = new Pet('Fido');
        const child = new Pet('Cookie');
        const child2 = new Pet('Crumble');
        parent.adoptChild(child);
        parent.adoptChild(child2);
        expect(parent.children).toBeInstanceOf(Array);
    });
});
});