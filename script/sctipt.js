"use strict";

if (4 === 4) {
    console.log('Ok!');
} else {
    console.log('Error');
}

const num = 50;

if (num < 49) {
    console.log('Error');
} else if (num > 100) {
    console.log('Too much');
} else {
    console.log('Ok!');
}

//Террнарный оператор
const num = 50;
(num == 50) ? console.log('Ok!'): console.log('Error');
//условие    действие если правда   действие если неправда
// используется 3 аргумента

const num = 40;
switch (num) {
    case 49:
        console.log('Falsch')
        break;
    case 39:
        console.log('Falsch')
        break;
    case 50:
        console.log('Falsch')
        break;
    case 40:
        console.log('Richtig')
        break;
}