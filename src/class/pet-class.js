const maximumFitness = 10;
const minimumHunger = 0;
const needFeedingLevel = 5;
const needWalkingLevel = 3;
const deathOldAge = 30;
const deathHunger = 10;
const deathFitness = 0;

class Pet {
    constructor(name) {
        this.name = name;
        this.age = 0;
        this.age = 0;
        this.hunger = 0;
        this.fitness = 10;
        this.children = [];
    }
    growUp() {
        if (!this.isAlive) {
            throw new Error('Your pet is no longer alive :(');
          }
        this.age += 1;
        this.fitness -= 3;
        this.hunger += 5;
    }
    walk() {
        if (!this.isAlive) {
            throw new Error('Your pet is no longer alive :(');
          }
        if (this.fitness >= 6) {
              this.fitness = 10; }
        else {
            this.fitness += 4; }       
        } 
    feed() {
        if (!this.isAlive) {
            throw new Error('Your pet is no longer alive :(');
          }
        if (this.hunger <=3) {
              this.hunger = 0; }
        else {
              this.hunger -=3; }
    }
    checkUp() {
        if (!this.isAlive) {
            throw new Error('Your pet is no longer alive :(');
          }
        if (this.fitness <= 3 && this.hunger >= 5) {
            return 'I am hungry AND I need a walk'; }
        else if (this.fitness <= 3) {
            return 'I need a walk' ; }
        else if (this.hunger >=5) {
            return 'I am hungry' ;}
        else {
            return 'I am great!'
        }
    }
    get isAlive() {
        return this.age < deathOldAge && this.hunger < deathHunger && this.fitness > deathFitness;
    }
    haveBaby(nameBaby) {
        const child = new Pet(nameBaby);
        this.children.push(child);
    }
    adoptChild(child) {
        this.children.push(child);
    }
}
module.exports = Pet;