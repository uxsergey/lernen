"use strict";

const options = { // <--- Object
    name: 'Test', // <--- Имеет ключ: значение
    width: 1024,
    height: 1200,
    colors: { // <--- Может иметь вложеную структуру
        border: 'black',
        background: 'red'
    },
    makeTest: function() { // <--- Может иметь вложеную функции. Таким образом будем создавать методы обьекта
        console.log('Test');
    }
};



const { border, background } = options.colors; // Деструктаризация обьекта

console.log(border);


console.log(Object.keys(options).length); //Счетчик содержания обьекта. 

//У оьектов бывают встроеные методы и св-Ва

// console.log(options.name)

// delete options.name

// console.log(options);

let counter = 0

for (let key in options) {
    if (typeof(options[key]) === 'object') {
        for (let i in options[key]) {
            console.log(`Свойство ${i} имеет значение ${options[key][i]}`);

        }
    } else {
        console.log(`Свойство ${key} имеет значение ${options[key]}`);
        counter++;
    }
}

console.log(counter)