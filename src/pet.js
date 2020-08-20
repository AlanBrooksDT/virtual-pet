const maximumFitness = 10;
const minimumHunger = 0;
const needFeedingLevel = 5;
const needWalkingLevel = 3;

function Pet(name) {
    this.name = name;
    this.age = 0;
    this.hunger = 0;
    this.fitness = 10;
}
Pet.prototype = {
    get isAlive() {
      return this.age < 30 && this.hunger < 10 && this.fitness > 0;
    }
}
Pet.prototype.growUp = function () {
    this.age += 1;
    this.hunger += 5;
    this.fitness -= 3;
}
Pet.prototype.walk = function () {
    if (this.fitness + 4 >= maximumFitness) {
        this.fitness = 10; }
    else {
        this.fitness += 4; }
}
Pet.prototype.feed = function () {
    if (this.hunger - 3 <= minimumHunger) {
        this.hunger = minimumHunger; }
    else {
        this.hunger -= 3;
    }
}
Pet.prototype.checkUp = function () {
    if (this.hunger >= needFeedingLevel && this.fitness <= needWalkingLevel ) {
        return 'I am hungry AND I need a walk'}
    else if (this.hunger >= needFeedingLevel) {
        return 'I am hungry' }
    else if (this.fitness <= needWalkingLevel ) {
        return 'I need a walk'}
    else {
        return 'I am great!' }
}
module.exports = Pet;