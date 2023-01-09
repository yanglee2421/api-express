Promise.resolve()
  .then(() => {
    throw "xxxxxx";
  })
  .catch((err) => {
    console.log(err);
  });
