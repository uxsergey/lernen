'use strict';

//foEach- пребирает массив и не возвращает новый

// Filter
// const names = ['ivan', 'Ann', 'Ksenia', 'Voldemart'];

// const shortNames = names.filter(function (name) {
//     return name.length < 5;
// })

// console.log(shortNames);

//map позвляет перебрать и изменить элемент внутри него

// const answ = ['ivaAn', 'ANa', 'Hello'];
// const result = answ.map(item => item.toLocaleLowerCase());
// console.log(result);

// every/some - возвращают булиновые значения
// const some = [4, 4, 2];
// console.log(some.every(item => typeof(item) === 'number'));

// reduce схлоповать или собирать массив в одно единое целое

// const arr = [4, 5, 1, 3, 2, 6];
// //                         0     4
// //                         4     5
// //                         9     1
// //                        10     3
// const res = arr.reduce((sum, current) => sum + current, 3);
// console.log(res);

// const arr = ['apple', 'orange', 'pear', 'plum', 'banane', 'mango', 'kiwi'];
// //                         0     4
// //                         4     5
// //                         9     1
// //                        10     3
// const res = arr.reduce((sum, current) => `${sum}, ${current}`);
// console.log(res);

const obj = {
    ivan: 'person',
    ann: 'person',
    dog: 'animal',
    cat: 'animal'
};

const newArr = Object.entries(obj).filter(item => item[1] === 'person').map(item => item[0]);

console.log(newArr);