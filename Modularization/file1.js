// ---------------Export-----------------
//1.
// let randomV = "John Wick" // want to use this in file2.js
// // export randomVar = randomVar;  wrong
// // export randomVar = "John Wick"; wrong
// exports.randomVar = "Baba Yaga"; // *s
// // exports.randomVar; // *s
// console.log("From file1", exports);  //  {} > Global Level Empty Object* 
// { randomVar: 'Baba Yaga' }
// /**
//  * let obj = {} // ~ exports  > global level empty object
//  * let name = "hello"; ~  exports.randomVar
//  * obj.name;  ~  exports.randomVar
//  */
// exports.randomV;

//2.
// exports.randomVar = "Baba Yaga";
// exports.randomV = "John Wick";

//3.
// let randomVar = "Baba Yaga";
// let randomV = "John Wick";
// exports.randomVar = randomV;
// exports.randomV = randomVar;
// exports.<<key>> = <<value>> : key can be anything


//4.
// let randomVar = "Baba Yaga";
// let randomV = "John Wick";
// exports.randomVar = randomV;
// exports.randomV = randomVar;
// exports.r = randomVar;
// exports.randomVar = randomVar;

//5.
// Embedded Object 
// let randomVar = "Baba Yaga";
// let randomV = "John Wick";
// exports.imp = {randomV, randomVar};

