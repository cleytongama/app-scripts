const personPrototype = {
    getDate() {
        return (new Date()).getFullYear() - this.year
    }
}

// const createPerson = function (name, city, year) {
//     const person = {
//         name,
//         city,
//         year,
//         getDate
//     }

//     return person;
// }
const createPerson = function (name, city, year) {
    const person = {
        name,
        city,
        year
    }
    Object.setPrototypeOf(person, personPrototype)

    return person;
}

const person1 = createPerson("Linus Torvalds", "Helsinki", 1969)
const person2 = createPerson("Bill Gates", "Seatle", 1955)

console.log(person1)
console.log(person1.__proto__)
console.log(person1.getDate())
console.log(person2.getDate())
// console.log(person1.getDate())