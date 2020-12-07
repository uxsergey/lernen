'use strict';
// ///Callbac hell
// console.log('Give me data...');

// setTimeout(() => {

//     console.log('Prepere date');

//     const product = {
//         name: 'TV',
//         price: 300
//     };

//     setTimeout(() => {
//         product.status = 'order';
//         console.log(product);
//     }, 2000);
// }, 2000);

// //Promes
// console.log('Give me data...');

// const req = new Promise(function(resolve, reject) {
//     setTimeout(() => {
//         console.log('Prepere date');

//         const product = {
//             name: 'TV',
//             price: 300
//         };

//         resolve(product);

//     }, 2000);
// });

// req.then((product) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             product.status = 'order';
//             resolve(product);
//             // reject();
//         }, 2000);
//     }).then(data => {
//         data.modify = true;
//         console.log(data);
//     }).then(data => {
//         console.log(data);
//     });
// }).catch(() => {
//     console.error('It was Error');
// }).finally(() => {
//     console.log('Finally');
// });

const test = time => {
    return new Promise(resolve => {
        setTimeout(() => resolve(), time);
    });
};

// test(1000).then(() => console.log('1000ms'));
// test(2000).then(() => console.log('2000ms'));

// Promise.all([test(1000), test(2000)]).then(() => { //ожидает выполнения всех промисов 
//     console.log('ALL');
// });

Promise.race([test(1000), test(2000)]).then(() => {
    console.log('ALL'); //ожидает выполнения первого успешно выполненого промиса
});