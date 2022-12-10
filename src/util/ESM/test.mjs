const target = new Boolean(false);
console.log(target);
const targetType = Object.prototype.toString.call(target);
console.log("typeof", typeof target);
console.log("strTag", target || targetType);
console.log("==", target == false);
console.log("===", target === false);
