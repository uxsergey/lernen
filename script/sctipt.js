"use strict";

const str = "teSt";
const arr = [1, 2, 4];

// console.log(str[2] = 'd');
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str);

const fruit = 'some fruit'; // поиск подстроки
console.log(fruit.indexOf("q"))

const logg = "Hello World";
console.log(logg.slice(-3, -4));

//       начало строки ^   ^ конец строки
//                           не включая последнюю

console.log(logg.substring(6, 11));
console.log(logg.substr(3, 15));

const num = 12.2;
console.log(Math.round(num))

const test = "12.2px";
console.log(parseInt(test)); //первод строки в целые числа
console.log(parseFloat(test)); //первод строки в числа в десятичном значении