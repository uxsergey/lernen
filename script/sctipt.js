"use strict";
// console.log(calc(4, 5))
// console.log(calc(5, 6))
// console.log(calc(8, 4))
// console.log(calc(14, 5))

// function calc(a, b) {
//     return (a + b);
// }

let num = 20;

function showFirstMessage(text) { //Function declarations
    console.log(text);
    let num = 10;
    console.log(num); // Замыкание ф-ци
}
showFirstMessage('Hello World!');
console.log(num);



function ret() {
    let num = 50;
    return num;
}

const anotherNum = ret();
console.log(anotherNum);

const logger = function() { //Function Expression
    console.log('Hello');
};

logger();

// const calc = (a,b) => a+b;
// console.log(calc(3,4))
const calc = (a, b) => {
    console.log('1');
    return (a + b);
};
console.log(calc(3, 4));