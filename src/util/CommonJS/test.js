const fun = (obj) => Object.prototype.toString.call(obj);
fun(undefined);
// returns [object Undefined]
fun("string");
// returns [object String]
fun(100);
// returns [object Number]
fun(false);
// returns [object Boolean]
fun(Symbol("symbol"));
// returns [object Symbol]
fun(100n);
// returns [object BigInt]
fun(null);
// returns [object Null]
fun({});
// returns [object Object]
fun([]);
// returns [object Array]
fun(() => {});
// returns [object Function]
fun(new Date());
// returns [object Date]
fun(new Promise(() => {}));
// returns [object Promise]
fun(new RegExp());
// returns [object RegExp]
fun(new Set());
// returns [object Set]
fun(new Map());
// returns [object Map]
