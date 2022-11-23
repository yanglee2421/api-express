let name = "CommonJS";
let age = 18;
const setAge = function (num) {
  this.age = num;
};
exports.name = name;
exports.age = age;
exports.setAge = setAge;
// export default obj;
