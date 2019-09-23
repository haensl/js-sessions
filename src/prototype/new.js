function Foo() {
  this.name = 'foo';
}

const o = new Foo();

console.log(`o's name: ${o.name}`);

const p = new Object();
p.prototype = Foo.prototype;
p.myname = 'not zozo';
Foo.call(p);
//p.name = 'zozo';

console.log(`p's name: ${p.name}`);
console.log(`p also has myname: ${p.myname}`);
