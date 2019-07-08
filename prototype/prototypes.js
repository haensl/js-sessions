const Mamal = function() {
  this.name = 'Mamal';
  function sayName() {
    console.log('oldschool');
  }
};

Mamal.prototype.sayName = function() {
  console.log(`I'm ${this.name}`);
};

const Dog = function() {
  this.name = 'Dog';

  this.whatIsVar = () => {
    console.log(this.someVar);
    console.log(Dog.someVar);
  }
};

Dog.prototype = Object.create(Mamal.prototype);

const Foo = {};
console.log(typeof Foo.prototype);
console.log(Foo.protype instanceof Object);
Foo.prototype = null;
console.log(typeof Foo.prototype);
console.log(Foo.protype instanceof Object);

const a = new Mamal();
a.sayName();

const b = new Dog();
b.sayName();

//console.log(b.prototype.name);

Mamal.prototype.sayName = function() {
  console.log(`Hi! I'm ${this.name}`);
};

a.sayName();
b.sayName();

//Dog.sayName();
Dog.prototype.sayName();
Dog.someVar = 'foo';
console.log(Dog);
//Dog.whatIsVar();
b.whatIsVar();
console.log(someVar);
