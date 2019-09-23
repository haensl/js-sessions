import Animal from './';

describe('Animal', () => {
  describe('say()', () => {
    let animal;

    beforeEach(() => {
      jest.spyOn(global.console, 'log');
      animal = new Animal();
      animal.say();
    });

    it('says something on the console', () => {
      expect(console.log).toHaveBeenCalledWith('I am Animal.');
    });
  });

  describe('makeSound()', () => {
    beforeEach(() => {
      jest.spyOn(global.console, 'log');
      Animal.makeSound();
    });

    it('makes a sound on the console', () => {
      expect(console.log).toHaveBeenCalledWith('Raaaawr');
    });
  });
});
