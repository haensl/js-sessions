const doAsync = async () => {
  await new Promise((resolve, reject) => {
    setTimeout(resolve, 3000);
  });
  console.log('doAsync: resolved.');
  console.log('doAsync: after invokation.');
};

const doPromise = () => {
  new Promise((resolve, reject) => {
      setTimeout(resolve, 3000);
  })
  .then(() => {
    console.log('doPromise: resolved.')
  });
  console.log('doPromise: after invokation.');
};

doAsync();
doPromise();
