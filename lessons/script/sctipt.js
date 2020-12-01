'use strict';
// const num = new Number(3);
// console.log(num);

function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function() {
        console.log(`Hello ${this.name}, ${this.id}`)
    };
}

User.prototype.exit = function() {
    console.log(`This ${this.name} is Leave System`)
};

const ivan = new User('Ivan', 30);
const alex = new User('Alex', 24);

ivan.hello();
alex.hello();

console.log(ivan);
console.log(alex);