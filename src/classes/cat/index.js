import Animal from '../animal';

class Cat extends Animal {
  constructor() {
    super();
    this.name = 'Cat';
    this.color = 'white';
  }
}

export default Cat;
