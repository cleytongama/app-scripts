// const wm1 = new WeakMap()
// const obj1 = {}
// const obj2 = {}

// wm1.set(obj1, "string1")
// wm1.set(obj2, "string2")
// console.log(wm1.has(obj1));
// console.log(wm1.get(obj1));

const areas = new WeakMap()
const rectangle1 = {
    x: 10,
    y: 2
}

const rectangle2 = {
    x: 5,
    y: 3
}

function calculateArea(rectangle){
    if(areas.has(rectangle)){
        console.log("Using  cache ...")
        return areas.get(rectangle)
    }
    const area = rectangle.x * rectangle.y
    areas.set(rectangle, area)
    return area;

}

console.log(calculateArea(rectangle1))
console.log(calculateArea(rectangle1))
console.log(calculateArea(rectangle2))