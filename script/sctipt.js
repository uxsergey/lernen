"use strict";

const arr = [2, 63, 6, 18];
arr.sort(compareNum);
console.log(arr);

function compareNum(a, b) { // сравненеие чисел
    return a - b;
}


// arr[99] =0;
// console.log(arr.length);
// console.log(arr)

// arr.forEach(function(item, i, arr) {
//     console.log(`${i}: ${item} внутри массива ${arr}`);
// });

// arr.pop(); //Удаляет последний элемент из массива
// arr.push(10); // Добавляет последний элемент в массив

// console.log(arr);

// for (let i =0; i < arr.length; i++) { //цикл все элементы массива пока не закончится длина массива.
//     console.log(arr[i]);
// }

// for (let value of arr) { // for of .. цикл  
//     console.log(value);
// }

const str = prompt("", "");
const products = str.split(", ");
products.sort();
console.log(products.join('; '));