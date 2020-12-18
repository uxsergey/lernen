'use strict';
//Regular epressions


// new RegExp('pattern', 'flags');
// /pattern/f

// const ans = prompt('Enter your age');
const reg = /\d/ig;

const str = 'My name is R2D2';
console.log(str.match(/\D/ig));
// console.log(ans.match(reg));
// console.log(reg.test(ans));

//\D поиск всех не цифр
//\W поиск всех не букв

// \d digits поиск цифр
// \w поиск всех слов всех букв
// \s spaces поиск всех пробелов


// i найти независимости от регистра
// g найти сразу несколько вхождений
// m включает многострочный режим

// console.log(ans.search(reg));
// console.log(ans.match(reg));

// const pass = prompt('Password');
// console.log(pass.replace(/\./g, '*'));

// console.log('12-33-56'.replace(/-/g, ':'));