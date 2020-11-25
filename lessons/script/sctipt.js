'use strict';
const now = new Date('2020-11-25');
// new Date.parse('2020-11-25');

//Методы сеттеры
console.log(now.setHours(140)); //Установить время
console.log(now);

//Методы геттеры

// console.log(now);
// console.log(now.getFullYear()); //Получение полного года
// console.log(now.getMounth()); //Получение полного месяца
// console.log(now.getHours()); //Получение времени
// console.log(now.getDate()); //Получение дня
// console.log(now.getDay()); //Получение номера дня недел.неделя начинается с воскр.
// console.log(now.getUTCHours()); //Получениевремени по другому часовому поясу
// console.log(now.getTimezoneOffset()); //Получение рахницы между часовым поясом и UTC
// console.log(now.getTime()); //Получение количества милисекунд с 1970-01-01


let start = new Date();
for (let i = 0; i < 10000; i++) {
    let some = i ** 3;
}
let end = new Date();

alert(`Цикл отработал за ${end-start} милисекунд`);