let color;
class Animal {
  constructor() {
    this.name = 'Animal';
    color = 'black';
  }

  say() {
    console.log(`I am ${this.name}.`);
  }

  get color() {
    return color;
  }

  set color(_color) {
    color = _color;
  }

  static makeSound() {
    console.log('Raaaawr');
  }
}

export default Animal;
