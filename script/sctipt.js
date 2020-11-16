"use strict";

// To String

// 1)

console.log(typeof(String(null)));
console.log(typeof(Number(4)));

// 2) Concatination

console.log(typeof(+'5'));

// 3) 

console.log(typeof(parseInt('15px', 10)));

let answer = +prompt('Hello', "");

// To boolean

// 0, '', null, undefinedm, NaN false

let switcher = 0;

if (switcher) {
    console.log('Working');
}
// 2)
console.log(typeof(Boolean('4')));

// 3)
console.log(typeof(!!"44444"));