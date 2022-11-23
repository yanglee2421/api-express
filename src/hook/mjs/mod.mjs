let name = "ESM";
let age = 18;
const setAge = (num) => (age = num);
// 不生成新对象
export { name, age, setAge };
// 生成新对象
export default { name, age, setAge };
export const a = 12;
