"use strict";

const box = document.getElementById('box');
console.log(box);

const btns = document.getElementsByTagName('button');
console.log(btns[0]);

const circles = document.getElementsByClassName('circle');
console.log(circles);

const hearts = document.querySelectorAll('.heart'); // есть for each
console.log(hearts);

hearts.forEach(items => {
    console.log(items);
});

const oneHeart = document.querySelector('.heart');
console.log(oneHeart);