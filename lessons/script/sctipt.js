'use strict';
const btns = document.querySelectorAll('button'),
    wrapper = document.querySelector('.btn-block');

// console.log(btns[0].classList.length);
// console.log(btns[0].classList.item(0));
// console.log(btns[0].classList.add('red', 'green'));
// console.log(btns[1].classList.add('red'));
// console.log(btns[0].classList.remove('blue'));
// console.log(btns[0].classList.toggle('blue'));
// console.log(btns[0].className);

// if (btns[1].classList.contains('red')) {
//     console.log('red')
// }

// btns[0].addEventListener('click', () => { /// Добавляем событие на клик первой кнопки при кототром
//     if (!btns[1].classList.contains('red')) { ///мы следим что у второй кнопки нет класса 'red'
//         btns[1].classList.add('red'); ///При необходимости добавляем его
//     } else {
//         btns[1].classList.remove('red'); // Если он уже есть удаляем
//     }
// });


btns[0].addEventListener('click', () => {
    btns[1].classList.toggle('red');
});

// wrapper.addEventListener('click', (event) => {
//     if (event.target && event.target.tagName == 'BUTTON') { //Google recomendation. Пример делегирования события
//         console.log('hello')
//     }
// });

wrapper.addEventListener('click', (event) => {
    if (event.target && event.target.matches('button.red')) { //Google recomendation. Пример делегирования события
        console.log('hello');
    }
});

// btns.forEach(btn => { // Пример ошибки делегирования
//     btn.addEventListener('click', () => {
//         console.log('hello')
//     })
// })

const btn = document.createElement('button');
btn.classList.add('green');
wrapper.append(btn); // метод append позволяет поместить btn в wrapper


// wrapper.addEventListener('click', (event) => {
//     if (event.target && event.target.classList.contains('blue')) {
//         console.log('hello');
//     }
// });