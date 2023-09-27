let a = "Lara Jean"

let fun1 = (a,b) => {
    return a*b;
}

// exports.b = "Duke"; // not exported
// module.exports = {a, fun1}; // gets exported

// priority
// module.exports = {a, fun1}; // gets exported
// exports.b = "Duke"; // not exported

// order matters
// module.exports = {a, fun1}; // gets exported
// module.exports.b = "Duke"; // gets exported  .. add a key-value to obj , hence not overriding

// not gets exported becoz it gets overridden
module.exports.b = "Duke"; // not exported  {b = "Duke"}
module.exports = {a, fun1}; // gets exported  // overridden

let obb={} // obb is what module.exports
obb.a="Hello";
console.log("With a", obb);
obb={c:"New World"};
console.log("With c", obb);
// console.log(obb);
obb.d="New York"; //add a key value to obj
console.log(obb)

/**
 * With a { a: 'Hello' }
    With c { c: 'New World' }        
    { c: 'New World', d: 'New York' }
*/


