
const calculateArea = function(fn){
    return fn(Math.PI * Math.pow(this.radiuos, 2))
}
const circle = {
    radiuos: 10,
    calculateArea
    
}

console.log(calculateArea.call(circle, Math.round))
console.log(calculateArea.apply(circle, [Math.round]))

const calculateAreaForCircle = calculateArea.bind(circle)

console.log(calculateAreaForCircle(Math.ceil))