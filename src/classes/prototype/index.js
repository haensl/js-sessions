export const Animal = function() {
  this.name = 'Animal';
};

Animal.prototype.say = function() {
  console.log(`I am ${this.name}.`);
};

Animal.makeSound = function() {
  console.log('Raaaawr');
};

export const Cat = function() {
  this.name = 'Cat';
};

Cat.prototype = Animal.prototype;
Cat.makeSound = Animal.makeSound;
