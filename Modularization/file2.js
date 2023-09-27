//1.
// let data = require('./file1');
// console.log("from file2", data);
// { randomVar: 'Baba Yaga' }
// { randomVar: 'Baba Yaga' }


//2.
// let data = require('./file1');
// console.log(data);
// { randomVar: 'Baba Yaga', randomV: 'John Wick' }


//3.
// let data = require('./file1');
// console.log(data);
// { randomVar: 'John Wick', randomV: 'Baba Yaga' } >> values swapped 


//4.
// let data = require('./file1');
// console.log(data);
// { randomVar: 'John Wick', randomV: 'Baba Yaga', r: 'Baba Yaga' }
// after line 35<< { randomVar: 'Baba Yaga', randomV: 'Baba Yaga', r: 'Baba Yaga' }
// JS  is interpreted , hence value gets overridden

//5.
// embedded object 
// { imp: { randomV: 'John Wick', randomVar: 'Baba Yaga' } }
// let data = require('./file1');
// console.log(data.imp.randomV);
// John Wick
// console.log(data.imp.randomVar);
// Baba Yaga



