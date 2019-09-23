(() => {
  let b = 'juergen';
  const a = 'foo';

  (() => {
    console.log(a);
    /**
    a = 'bar';
    console.log(a);
    */

    console.log(b);
    b = 'jochen';
    console.log(b);
  })();

  const doStuff = () => {
    console.log(this);
  };

  doStuff();

  /**
  const buttons = document.querySelectorAll('button');
  Array.prototype.map.apply(buttons, (button) => {
    button.style.background = 'ed';
  });
  */
  console.log(b);
})();
