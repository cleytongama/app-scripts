// const arrSet = new Set()

// arrSet.add("ASCII")
// arrSet.add("ISO")
// arrSet.add("java")
// // console.log(Array.from(arrSet))
// console.log(arrSet.size)

let array = [10, 5, 10]
let aux = []
array.forEach((element)=>{
    if(!aux.includes(element)){
        aux.push(element)
    }
})
console.log(aux)
// let array2 = [10, 5, 10]

// const set = new Set(array)

// array = [...set]

// console.log(array)
// console.log(Array.from(set))

// const result = array2.filter((item, index, array) => {
//     return array.indexOf(item) === index;
// })
let obj = {}
array.forEach((item) => {
    obj[item] = undefined
})
console.log(obj)