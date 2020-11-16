"use strict";

// let str = 'some';
// let strObj = new String(str);

// console.log(typeof(str));
// console.log(typeof(strObj));

// console.dir([1, 2, 3])

const solder = {
    health: 400,
    armor: 100,
    sayHello: function() {
        console.log('Hello!');
    }
};
const john = Object.create(solder);
Object.setPrototypeOf(john, solder);
john.sayHello();

// const john = {
//     health: 100
// };

// // john.__proto__ = solder;//устаревшее



// console.log(john.armor);