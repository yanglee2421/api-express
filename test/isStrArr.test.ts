export default (arr: unknown) => {
  if (!Array.isArray(arr)) {
    throw new Error("期望一个数组，但收到一个非数组参数");
  }
  if (arr.some((item) => typeof item !== "string")) {
    throw new Error("数组中含有非string元素");
  }
};
