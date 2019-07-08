const a = 1;
let b = 2;

//a++;
b++;

const foo = {
  bar: 'jasöldfief'
};

foo.bar = 1;

console.log(`a ${a}`);
console.log(`b ${b}`);

(() => {
  const c = 3;
  let d = 4;
  var e = 'foo';

  (() => {
    console.log(`c ${c}`);
    let d = 5;
    console.log(`d ${d}`);
    console.log(`e ${e}`);
    var e = 'bar';
    console.log(`d after redefinition ${d}`);
    console.log(`e in inner anonymous function ${e}`);
  })();
  console.log(`d after redifinition outside function ${d}`);
  console.log(`e after inner anonymous function ${e}`);

  for (let i = 0; i < 1; i++) {
    //console.log(`e in block ${e}`);
    e = 'bar';
    //console.log(`e after reassignment ${e}`);
  }

  //console.log(e);
})();

//console.log(c);
//console.log(d);
//

const doStuff = (param) => {
  return ++param;
};

const s = 5;
const myTotal = doStuff(s);

console.log(myTotal);


