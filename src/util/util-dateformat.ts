export default (date: number | Date, isSimple: boolean = false) => {
  const target = new Date(date);
  const format = (num: number) => (num < 10 ? `0${num}` : `${num}`);
  const yyyy = target.getFullYear();
  const MM = format(target.getMonth() + 1);
  const DD = format(target.getDate());
  const hh = format(target.getHours());
  const mm = format(target.getMinutes());
  const ss = format(target.getSeconds());
  return isSimple
    ? `${yyyy}-${MM}-${DD}`
    : `${yyyy}-${MM}-${DD} ${hh}:${mm}:${ss}`;
};
