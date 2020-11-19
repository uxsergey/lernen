"use strict";
// console.log(document.body);
// console.log(document.documentElement); // Содержимое DOM дерева
// console.log(document.body.childNodes); // Показать все узлы которые находятся внутри родителя (body)
// console.log(document.body.firstChild); // Показать первый узел внутри родителя
// console.log(document.body.lastChild); // Показать последний узел внутри родителя
// console.log(document.querySelector('#current').parentNode);
// console.log(document.querySelector('#current').parentElement);
// console.log(document.querySelector('[data-current="3"]').nextElementSibling);
for (let node of document.body.childNodes) {
    if (node.nodeName == '#text') {
        continue;
    }
    console.log(node);
}