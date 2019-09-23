import { Animal, Cat } from './';

describe('Animal', () => {
  describe('say()', () => {
    let animal;
    let spy;

    beforeEach(() => {
      spy = jest.spyOn(global.console, 'log');
      animal = new Animal();
      animal.say();
    });

    afterEach(() => {
      spy.mockClear();
    });

    it('says something on the console', () => {
      expect(console.log).toHaveBeenCalledWith('I am Animal.');
    });
  });

  describe('makeSound()', () => {
    let spy;

    beforeEach(() => {
      spy = jest.spyOn(global.console, 'log');
      Animal.makeSound();
    });

    afterEach(() => {
      spy.mockClear();
    });

    it('makes a sound on the console', () => {
      expect(console.log).toHaveBeenCalledWith('Raaaawr');
    });
  });
});

describe('Cat', () => {
  describe('say()', () => {
    let cat;

    beforeEach(() => {
      jest.spyOn(global.console, 'log');
      cat = new Cat();
      cat.say();
    });

    it('says something on the console', () => {
      expect(console.log).toHaveBeenCalledWith('I am Cat.');
    });
  });

  describe('makeSound()', () => {
    beforeEach(() => {
      jest.spyOn(global.console, 'log');
      Cat.makeSound();
    });

    it('makes a sound on the console', () => {
      expect(console.log).toHaveBeenCalledWith('Raaaawr');
    });
  });
});

describe('new keyword', () => {
  let fakeCat;

  beforeEach(() => {
    fakeCat = {};
    Object.setPrototypeOf(fakeCat, Cat.prototype);
    Cat.call(fakeCat);
    jest.spyOn(global.console, 'log');
    fakeCat.say();
  });

  it('says something on the console', () => {
    expect(console.log).toHaveBeenCalledWith('I am Cat.');
  });
});
