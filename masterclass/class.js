const Shape = class {
    toString(){
        return `area ${this.calculateArea()}`
    }
}

const Square = class extends Shape {
    constructor(side) {
        super();
        this.side = side
    }

    toString() {
        return `Square :: Side: ${this.side} | Área: ${super.toString()}`
    }

    calculateArea() {
        return Math.pow(this.side, 2)
    }

    static fromArea(area) {
        return new Square(Math.sqrt(area))
    }
}

const square = Square.fromArea(16)

console.log(square.toString())

class Circle extends Shape{
    constructor(radius) {
        super();
        this.radius = radius;
    }

    toString() {
        return `Circle :: Radius: ${this.radius} | Área: ${super.toString()}`
    }

    calculateArea() {
        return Math.PI * Math.pow(this.radius, 2)
    }

    static fromArea(area) {
        return new Circle(Math.sqrt(area))
    }
}


const circle = Circle.fromArea(10)

console.log(circle.toString())

// console.log(square.toString())
// console.log(square.calculateArea())

/* Funcao construtora */

// const Square = function (side) {
//     this.side = side
// }

// Square.prototype.calculateArea = function () {
//     return Math.pow(this.side, 4)
// }

// Square.prototype.toString = function () {
//     return `side ${this.side}`
// }

// Square.fromArea = function (area) {
//     return new Square(Math.sqrt(area))
// }

// const square = Square.fromArea(16)

// console.log(square.toString())