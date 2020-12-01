'use strict';

//
//Классы или синтактический сахар
//
class Retangle { //Это концепция
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
    calcArea() {
        return this.height * this.width;
    }
}

class ColoredRectangleWithText extends Retangle {
    constructor(height, width, text, bgColor) {
        super(height, width); //повторяет тоже самое что было у родителя. 
        this.text = text; // Super должен стоять на первом месте в конструкторе(!!!)
        this.bgColor = bgColor;
    }
    showMyProps() {
        console.log(`Text:${this.text}, color: ${this.bgColor}`);
    }
}

const div = new ColoredRectangleWithText(25, 10, 'Hello world', 'Red');
div.showMyProps();
console.log(div.calcArea());

// const square = new Retangle(10, 10); //Это экземпляр
// const long = new Retangle(20, 150);

// console.log(square.calcArea());
// console.log(long.calcArea());