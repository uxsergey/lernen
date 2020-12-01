'use strict';
//1)Обычная функция this = window, но если use strict -undefined
//2) Контекст у методов обьекта = сам обьект
//3) this в конструкторах и классах- это новый экзэпляр объекта (!!!)
//4) Ручная привязка this: call, apply, bindconst


// function showThis(a, b) {
//     console.log(this);

//     function sum() {
//         console.log(this);
//         return a + b
//     }
//     console.log(sum());
// }
// showThis(4, 5);

// const obj = {

//     a: 20,
//     b: 15,
//     sum: function() {
//         function showed() {
//             console.log(this);
//         }
//         showed();
//     }
// };
// obj.sum();

// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function() {
//         console.log('hello!' + this.name);

//     };
// }
// let ivan = new User('Ivan', 23);


// function sayName(surname) {
//     console.log(this);
//     console.log(this.name + surname)
// }
// const user = {

//     name: 'John'
// };
// sayName.call(user, 'smith');
// sayName.apply(user), ['smith'];

// function count(num) {
//     return this * num;

// }
// const double = count.bind(2);
// console.log(double(3));


const btn = document.querySelector('button');

btn.addEventListener('click', function() {
    this.style.backgroundColor = 'red'
});
const obj = {
    num: 5,
    sayNumber: function() {

        ///У Стрелочной функции нет своего контекста вызова.Она берет его от своего родителя

        const say = () => {
            console.log(this.num);
        };

        say();
    }
};

obj.sayNumber();

const double = a => a * 2;
console.log(double(3));