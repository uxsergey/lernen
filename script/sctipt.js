"use strict";

// let a = 5,
//     b = a;

// b = b + 5;

// console.log(b);
// console.log(a);

// const obj = {
//     a: 5,
//     b: 1
// };

// const copy = obj; // Передает ссылку
// copy.a = 10;

// console.log(copy);
// console.log(obj);

function copy(mainObj) { //функция поверхостная копия объекта
    let objCopy = {};
    let key;
    for (key in mainObj) {
        objCopy[key] = mainObj[key];
    }
    return objCopy;
}

const num = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 8
    }
};

const newNum = copy(num);
newNum.a = 10;
newNum.c.x = 10;

// console.log(newNum);
// console.log(num);


// object assign method
const add = {
    d: 17,
    e: 23
};

const clone = Object.assign({}, add);

clone.d = 20;

//  console.log(add);
//  console.log(clone);

const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();

newArray[1] = 'dsgsdfgsd';
console.log(newArray);
console.log(oldArray);

//// Spred Operathors ES6

const video = ['youtube', 'vimeo', 'rutube'],
    blogs = ['wordpress', 'livejournal', 'blogger'],
    internet = [...video, ...blogs, 'vk', 'facebook'];

console.log(internet);

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const nummber = [2, 5, 7];
log(...nummber);

const arr2 = ['a', 'b'];
const newArr = [...arr2];
console.log(newArr);

const q = {
    one: 1,
    two: 2
};
const newObj = {...q };
console.log(newObj);