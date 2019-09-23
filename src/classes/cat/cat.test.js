import Cat from './';

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

  describe('color', () => {
    let cat;
    let color;

    beforeEach(() => {
      cat = new Cat();
      color = cat.color;
    });

    it('returns the cat\'s color', () => {
      expect(color).toEqual('white');
    });
  });
});
