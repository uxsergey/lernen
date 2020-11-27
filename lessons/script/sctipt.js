'use strict';
const box = document.querySelector('.box');
// const width = box.clientWidth,
//     height = box.clientHeight;
// const width = box.offsetWidth;
// const height = box.offsetHeight;
const height = box.scrollHeight;
const width = box.scrollWidth;
const btn = document.querySelector('button');

console.log(width, height);
btn.addEventListener('click', () => {
    box.style.height = box.scrollHeight + 'px';
    console.log(box.scrollTop);
});


console.log(box.getBoundingClientRect().top);
const style = window.getComputedStyle(box);
console.log(style.display);
console.log(document.documentElement.scrollTop);
// window.scrollTo(0, 400)//Спуститься на 400 писелей с начала страницы
// window.scrollBy(0, 400)//Спуститься на 400 писелей из текущего места