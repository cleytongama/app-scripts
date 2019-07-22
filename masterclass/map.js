// const timeUnits = new Map()

// timeUnits.set("second", 1)
// timeUnits.set("minute", 60)
// timeUnits.set("hour", 3600)

// console.log(timeUnits)

// const obj = {}
// obj[10] = "Number"
// obj["10"] = "String"
// obj[true] = "Boolean"
// obj["true"] = "String"

// console.log(obj[10])
// console.log(obj["10"])
// console.log(obj[true])
// console.log(obj["true"])
// console.log("------ Object --------")

// const map = new Map()
// map.set(10, 'Number')
// map.set("10", 'String')
// map.set(true, "Boolean")
// map.set("true", "String")


// console.log(map.get(10))
// console.log(map.get("10"))
// console.log(map.get(true))

// const obj = { "name": "cleyton" }

// console.log("name" in obj)


// const myMap = new Map()

// const keyString = "name"
// const keyObj = {};
// const keyBollean = true;

// myMap.set(keyString, "Nome é cleyton gama")
// myMap.set(keyBollean, "Isso é um boolean")

let myMap = new Map([["key1","value1"], ["key2","value2"]]);

console.log(myMap)
console.log(Array.from(myMap))
console.log([...myMap])
console.log([...myMap.keys()])
console.log([...myMap.values()])

console.log(myMap.delete('key1'))
console.log(myMap.clear())
console.log(myMap)

// console.log(myMap.entries())

// myMap.set(0, "zero");
// myMap.set(1, "um");

// for (let [key, value] of myMap) {
//     // console.log(key + " = " + value);
//     console.log(key + " = " +value);
// }

// for(key of myMap.keys() ){
//     console.log(key)
// }

// for(value of myMap.values() ){
//     console.log(value)
// }

const obj = {}
 obj[1] = "1"
 obj["1"] = "1"

 console.log(obj)