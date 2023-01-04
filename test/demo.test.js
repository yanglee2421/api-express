const num = 1010_1010_1010_1010;
const str = num.toString();
const bit0 = str.at(-1);
const bit1 = str.at(-2);
const bit2 = str.at(-3);
if (bit0) {
  doSomething();
} else if (bit1) {
  doSomething();
} else if (bit2) {
  doSomething();
}
console.log("bit0", bit0);
// 0
console.log("bit1", bit1);
// 1
console.log("bit2", bit2);
// 0
function doSomething() {}
