"use strict";

const btn = document.querySelector('button'),
    btns = document.querySelectorAll('button'),
    overlay = document.querySelector('.overlay');

// btn.onclick = function() { ///Неправильно
//     alert('click')
// };
// let i = 0;
const delElement = (e) => {
    console.log(e.currentTarget);
    console.log(e.type);
    // i++;
    // if (i == 1) {
    //     btn.removeEventListener('click', delElement);
    // }
};
btns.forEach(btn => {
    btn.addEventListener('click', delElement, {
        once: true
    });
});
// btn.addEventListener('click', delElement);
// overlay.addEventListener('click', delElement);

const link = document.querySelector('a');
link.addEventListener('click', function(event) {
    event.preventDefault();
    console.log();
});