const maximumFitness = 10;
const minimumHunger = 0;
const needFeedingLevel = 5;
const needWalkingLevel = 3;
const deathOldAge = 30;
const deathHunger = 10;
const deathFitness = 0;

function Pet(name) {
    this.name = name;
    this.age = 0;
    this.hunger = 0;
    this.fitness = 10;
    this.children = [];
}
Pet.prototype = {
    get isAlive() {
      return this.age < deathOldAge && this.hunger < deathHunger && this.fitness > deathFitness;
    }
}
Pet.prototype.growUp = function () {
    if (!this.isAlive) {
        throw new Error('Your pet is no longer alive :(');
      }
    this.age += 1;
    this.hunger += 5;
    this.fitness -= 3;
}
Pet.prototype.walk = function () {
    if (!this.isAlive) {
        throw new Error('Your pet is no longer alive :(');
      }
    if (this.fitness + 4 >= maximumFitness) {
        this.fitness = 10; }
    else {
        this.fitness += 4; }
}
Pet.prototype.feed = function () {
    if (!this.isAlive) {
        throw new Error('Your pet is no longer alive :(');
      }
    if (this.hunger - 3 <= minimumHunger) {
        this.hunger = minimumHunger; }
    else {
        this.hunger -= 3;
    }
}
Pet.prototype.checkUp = function () {
    if (!this.isAlive) {
        throw new Error('Your pet is no longer alive :(');
    }
    if (this.hunger >= needFeedingLevel && this.fitness <= needWalkingLevel ) {
        return 'I am hungry AND I need a walk'}
    else if (this.hunger >= needFeedingLevel) {
        return 'I am hungry' }
    else if (this.fitness <= needWalkingLevel ) {
        return 'I need a walk'}
    else {
        return 'I am great!' }
}
Pet.prototype.haveBaby = function (nameBaby) {
    const child = new Pet(nameBaby);
    this.children.push(child);
}
module.exports = Pet;