class Animal {
  constructor() {
    this.name = 'Animal';
  }

  say() {
    console.log(`I am ${this.name}.`);
  }

  static makeSound() {
    console.log('Raaaawr');
  }
}

export default Animal;
