const arr = [
  { type: 0, name: "1" },
  { type: 0, name: "2" },
  { type: 1, name: "3" },
  { type: 1, name: "4" },
  { type: 2, name: "5" },
  { type: 2, name: "6" },
];
const types = [...new Set(arr.map((item) => item.type))];
const res = types.map((type) => ({
  type,
  value: arr.filter((item) => item.type === type),
}));
console.log(res);
