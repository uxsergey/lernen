"use strict";

const box = document.getElementById('box'),
    btns = document.getElementsByTagName('button'),
    wrapper = document.querySelector('.wrapper'),
    circles = document.getElementsByClassName('circle'),
    hearts = wrapper.querySelectorAll('.heart'), // есть for each
    oneHeart = wrapper.querySelector('.heart'),
    div = document.createElement('div');

hearts.forEach(items => {
    console.log(items);
});

box.style.backgroundColor = 'blue';
box.style.width = '500px';

btns[1].style.borderRadius = '10%';
circles[0].style.backgroundColor = 'green';

box.style.cssText = 'background-color:black; width:300px';

// for (let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = 'blue'
// }

hearts.forEach(item => {
    item.style.backgroundColor = 'black';
});

// const text = document.createTextNode('I was here')

div.classList.add('black');

wrapper.append(div);
// wrapper.appendChild(div);//Устаревший синтаксис 

//wrapper.prepend(div);
// hearts[0].before(div);
hearts[0].after(div);
// wrapper.insertBefore(div, hearts[1]); //Устаревший синтаксис 

//circles[0].remove();
// wrapper.removeChild(hearts[1]); //Устаревший синтаксис 

// hearts[0].replaceWith(circles[1]);
// wrapper.replaceChild(circles, hearts[1]);
div.innerHTML = '<h1>Hello World</h1>';
// div.textContent = 'Hello';
div.insertAdjacentHTML('afterend', '<h1>Hello World</h1>');