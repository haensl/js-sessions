const onSuccess = () => {
  console.log('success.');
  throw new Error('Something went wrong in the success handler!');
};

const onError = () => {
  console.log('fail.');
};

/**
new Promise((resolve, reject) => {
  setTimeout(resolve, 2000);
}).then(onSuccess, onError);
*/

new Promise((resolve, reject) => {
  setTimeout(resolve, 2000);
}).then(onSuccess)
  .catch((err) => {
    console.log('I also do stuff with errors.');
  })
  .catch(onError);


Promise()
  .then(() => {
    fetch(...)
  })
  .catch((err) => {
    // I will only catch errors from the fetch promise.
  })
  .then(() => {
    // i will wait for fetch to complete
  })
  .then(() => {

  }) 
