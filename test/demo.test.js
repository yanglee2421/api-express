Promise.reject(new Error("upstream error")).catch(({ message }) => {
  console.log(message);
});
