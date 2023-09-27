let obj = {};
obj.a = "Lara Jean"

obj.fun1 = (a,b) => {
    return a*b;
}
obj.b = "Duke";
module.exports = obj;
// exports.fun1 = "Hello";
module.exports.fun1 = "Hello"; // { a: 'Lara Jean', fun1: 'Hello', b: 'Duke' } >> fun1 gets overridden




// module.exports.b = "Duke"; // not exported  {b = "Duke"}
// module.exports = {a, fun1};