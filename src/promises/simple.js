new Promise((resolve, reject) => {
  // do stuff
  // stuff fails
  throw new Error('Something went horribly wrong');
  resolve();
})
.then(() => {
  console.log('it worked');
});
