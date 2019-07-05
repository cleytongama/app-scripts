const sum = function (a, b) {
    return a + b;
};

const substract = function (a, b) {
    return a - b;
};

const calculator = function (fn) {
    return function (a, b) {
        return fn(a, b);
    };
};

console.log(calculator(sum)(2, 2))