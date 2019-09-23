class Mamal {
  constructor() {
    this.name = 'Mamal';
  }

  get hasFur() {
    if (this.name === 'Dog') {
      console.log('I have fur');
      return;
    }

    console.log('No fur here');
  }

  set hasFur(hasFur) {
    console.log(hasFur);
  }

  sayName() {
    console.log(`I'm ${this.name}`);
  }
}

class Dog extends Mamal {
  constructor() {
    super();
    this.name = 'Dog';
  }
}

const b = new Dog();
b.sayName();
b.hasFur;

const a = new Mamal();
a.hasFur;

a.hasFur = 'BLAAAAA';

