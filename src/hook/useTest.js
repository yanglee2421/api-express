Promise.resolve().then(() => {
  console.log("微任务");
  queueMicrotask(() => {
    console.log("queueMic");
  });
  setTimeout(() => {
    console.log("宏任务1");
  }, 0);
});
queueMicrotask(() => {
  console.log("micro2");
});
setTimeout(() => {
  console.log("宏任务1");
}, 0);
